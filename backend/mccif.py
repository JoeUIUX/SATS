import socket

r = 0

def startcount():
    global r
    r += 1
    return r

# Functions for sending (mccifSet) and receiving (mccifRead) data over a socket connection.
def mccifSet(sock, parameter, value):
    message = parameter + ".value=" + str(value) + "\n"
    byt = message.encode()
    sock.sendall(byt)

def mccifRead(sock, parameter):
    message = ""
    for x in parameter:
        message = message + x + ".log=true\n"
    print(message)
    byt = message.encode()
    sock.sendall(byt)

    print("")
    sock.settimeout(20.0)
    try:
        data = sock.recv(4096)
        L = data.decode()
        num = L.count("\n")
        if num == len(parameter):
            reply = L.split("\n")[0:len(parameter)]
        else:
            while num < len(parameter):
                data = sock.recv(4096)
                L = data.decode()
                num = L.count("\n")
                reply = L.split("\n")[0:len(parameter)]
        print(reply)
        print("")
    except ConnectionError:
        print("MCC Connection Error!")
    except socket.timeout:
        print("MCC Timeout Error!")

    message = ""
    for x in parameter:
        message = message + x + ".log=false\n"
    print(message)
    byt = message.encode()
    sock.sendall(byt)
    return reply

# Function for initiating a connection to the MCC server.
def connect_to_mcc(server_address):
    try:
        # Split server address into host and port
        host, port = server_address.split(":")
        port = int(port)

        # Create a TCP socket
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(10)  # Set a 10-second timeout for the connection
        sock.connect((host, port))  # Establish connection
        print(f"Connected to MCC server at {host}:{port}")

        return sock  # Return the socket for further communication
                     # e.g. sending/receiving data after establishing the connection.
    except Exception as e:
        print(f"Failed to connect to MCC server: {e}")
        return None
