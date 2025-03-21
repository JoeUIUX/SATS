module.exports = {

"[project]/src/components/ToTestList/ToTestList.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "actions": "ToTestList-module__vY2V8W__actions",
  "addButton": "ToTestList-module__vY2V8W__addButton",
  "clearButton": "ToTestList-module__vY2V8W__clearButton",
  "closeButton": "ToTestList-module__vY2V8W__closeButton",
  "dark": "ToTestList-module__vY2V8W__dark",
  "deleteButton": "ToTestList-module__vY2V8W__deleteButton",
  "drag-handle": "ToTestList-module__vY2V8W__drag-handle",
  "form": "ToTestList-module__vY2V8W__form",
  "header": "ToTestList-module__vY2V8W__header",
  "popup": "ToTestList-module__vY2V8W__popup",
  "popup-show": "ToTestList-module__vY2V8W__popup-show",
  "selectedRow": "ToTestList-module__vY2V8W__selectedRow",
  "table": "ToTestList-module__vY2V8W__table",
});
}}),
"[project]/src/components/ToTestList/ToTestList.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/ToTestList/ToTestList.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-draggable/build/cjs/cjs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
;
;
;
;
;
const ToTestList = ({ zIndex, onMouseDown, onClose, bringWindowToFront, windowZIndexes, zIndexCounter })=>{
    const nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null); // ✅ Ensure nodeRef is initialized
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        test: "",
        satellite: "",
        loggedBy: ""
    });
    const [currentZIndex, setCurrentZIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(zIndex); // ✅ Track `zIndex`
    // Portal management
    const [portalElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        // Create portal element once
        const element = document.createElement("div");
        element.id = "toTestList-root";
        document.body.appendChild(element);
        return element;
    });
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: (window.innerWidth - 550) / 2,
        y: (window.innerHeight - 400) / 2
    });
    // Load data from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Load data from localStorage
        const savedRows = localStorage.getItem("toTestListRows");
        if (savedRows) {
            setRows(JSON.parse(savedRows));
        }
        // Cleanup function for when component unmounts
        return ()=>{
            if (portalElement && portalElement.parentNode) {
                portalElement.parentNode.removeChild(portalElement);
            }
        };
    }, [
        portalElement
    ]);
    // Save data to localStorage when rows change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (rows.length > 0) {
            localStorage.setItem("toTestListRows", JSON.stringify(rows));
        } else {
            localStorage.removeItem("toTestListRows");
        }
    }, [
        rows
    ]);
    const addItem = ()=>{
        const newRow = {
            sn: rows.length + 1,
            test: form.test,
            satellite: form.satellite,
            dateTime: new Date().toLocaleString(),
            loggedBy: form.loggedBy
        };
        setRows([
            ...rows,
            newRow
        ]);
        setForm({
            test: "",
            satellite: "",
            loggedBy: ""
        });
    };
    const deleteItem = ()=>{
        const selectedIndex = rows.findIndex((row)=>row.selected);
        if (selectedIndex !== -1) {
            const updatedRows = rows.filter((_, index)=>index !== selectedIndex);
            if (updatedRows.length === 0) {
                // If the list is empty, clear localStorage
                localStorage.removeItem("toTestListRows");
            } else {
                // Otherwise, update the rows and save to localStorage
                localStorage.setItem("toTestListRows", JSON.stringify(updatedRows));
            }
            // Update state with recalculated S/N
            setRows(updatedRows.map((row, index)=>({
                    ...row,
                    sn: index + 1
                })));
        }
    };
    const clearList = ()=>{
        setRows([]);
        localStorage.removeItem("toTestListRows"); // Explicitly clear localStorage
    };
    const toggleRowSelection = (index)=>{
        const updatedRows = rows.map((row, i)=>({
                ...row,
                selected: i === index ? !row.selected : false
            }));
        setRows(updatedRows);
    };
    // Add state to track dark mode
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Update dark mode state on component mount and when theme changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkDarkMode = ()=>{
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        };
        // Initial check
        checkDarkMode();
        // Set up observer for theme changes
        const observer = new MutationObserver((mutations)=>{
            mutations.forEach((mutation)=>{
                if (mutation.attributeName === "class") {
                    checkDarkMode();
                }
            });
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [
                "class"
            ]
        });
        return ()=>observer.disconnect();
    }, []);
    // Determine if the page is in dark mode
    //const isDarkMode = document.documentElement.classList.contains("dark");
    // ✅ Ensure ToTestList mounts in a completely separate DOM node
    const portalRoot = document.getElementById("toTestList-root") || (()=>{
        const root = document.createElement("div");
        root.id = "toTestList-root";
        document.body.appendChild(root);
        return root;
    })();
    // Debug when z-index changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log(`ToTestList z-index updated to ${zIndex}`);
    }, [
        zIndex
    ]);
    console.log(`🎯 ToTestList received zIndex:`, zIndex);
    const windowName = "ToTestList";
    // Log when component renders
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log("ToTestList component rendering with z-index:", zIndex);
    }, [
        zIndex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        nodeRef: nodeRef,
        handle: ".drag-handle",
        position: position,
        onStop: (e, data)=>{
            console.log(`📌 ToTestList moved to: x=${data.x}, y=${data.y}`);
            setPosition({
                x: data.x,
                y: data.y
            }); // ✅ Updates position when dragged
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: nodeRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].popup,
            style: {
                position: "fixed",
                zIndex: windowZIndexes["ToTestList"] || zIndex,
                backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                color: isDarkMode ? "#fff" : "#000",
                boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
            },
            onMouseDown: (e)=>{
                e.stopPropagation();
                console.log(`🖱️ Clicked ${windowName}, bringing to front`);
                bringWindowToFront(windowName);
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header} drag-handle`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Tests to Conduct"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation(); // ✅ Prevents accidental reopening
                                onClose();
                            },
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                            style: {
                                color: isDarkMode ? "white" : "black"
                            },
                            children: "✖"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "S/N"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Test"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Satellite"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Date/Time Logged"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Logged by"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                            lineNumber: 210,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: rows.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: {
                                        backgroundColor: row.selected ? isDarkMode ? "#003366" // Dark blue for dark mode
                                         : "#d0ebff" // Light blue for light mode
                                         : "transparent"
                                    },
                                    className: row.selected ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectedRow : "",
                                    onClick: ()=>toggleRowSelection(index),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: row.sn
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: row.test
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: row.satellite
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: row.dateTime
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                            lineNumber: 236,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: row.loggedBy
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                            lineNumber: 219,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                    lineNumber: 209,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Test",
                            value: form.test,
                            onChange: (e)=>setForm({
                                    ...form,
                                    test: e.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                            lineNumber: 243,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Satellite",
                            value: form.satellite,
                            onChange: (e)=>setForm({
                                    ...form,
                                    satellite: e.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                            lineNumber: 249,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Logged by",
                            value: form.loggedBy,
                            onChange: (e)=>setForm({
                                    ...form,
                                    loggedBy: e.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                            lineNumber: 255,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: addItem,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addButton,
                            children: "+"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                            lineNumber: 261,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                    lineNumber: 242,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: deleteItem,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteButton,
                            children: "Delete Item"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                            lineNumber: 266,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: clearList,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].clearButton,
                            children: "Clear List"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                            lineNumber: 269,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                    lineNumber: 265,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
            lineNumber: 180,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this), document.body);
};
const __TURBOPACK__default__export__ = ToTestList;
}}),
"[project]/src/components/ServerWindow/ServerWindow.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "closeButton": "ServerWindow-module__wfqmlq__closeButton",
  "connectButton": "ServerWindow-module__wfqmlq__connectButton",
  "dark": "ServerWindow-module__wfqmlq__dark",
  "drag-handle": "ServerWindow-module__wfqmlq__drag-handle",
  "form": "ServerWindow-module__wfqmlq__form",
  "header": "ServerWindow-module__wfqmlq__header",
  "input": "ServerWindow-module__wfqmlq__input",
  "popup": "ServerWindow-module__wfqmlq__popup",
  "popup-show": "ServerWindow-module__wfqmlq__popup-show",
});
}}),
"[project]/src/components/ServerWindow/ServerWindow.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/ServerWindow/ServerWindow.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$rnd$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-rnd/lib/index.js [app-ssr] (ecmascript)"); // ✅ Use `react-rnd` instead of `react-draggable`
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-router-dom/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const portalRoot = document.body; // ✅ Forces ServerWindow to render inside body
const ServerWindow = ({ zIndex, onMouseDown, onClose, bringWindowToFront, windowZIndexes, zIndexCounter })=>{
    const [serverAddress, setServerAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [serverId, setServerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Disconnected");
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const logsEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigate"])();
    const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";
    const windowName = "ServerWindow";
    // Create portal element once on mount
    const [portalElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const element = document.createElement("div");
        element.id = "serverWindow-root";
        document.body.appendChild(element);
        return element;
    });
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: (window.innerWidth - 650) / 2,
        y: (window.innerHeight - 400) / 2
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Scroll logs to bottom when they update
        if (logsEndRef.current) {
            logsEndRef.current.scrollIntoView({
                behavior: "smooth"
            });
        }
        // Cleanup function for component unmount
        return ()=>{
            if (portalElement && portalElement.parentNode) {
                portalElement.parentNode.removeChild(portalElement);
            }
        };
    }, [
        logs,
        portalElement
    ]);
    const nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentZIndex, setCurrentZIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(zIndex); // ✅ Track `zIndex`
    const appendLog = (message)=>{
        const timestamp = new Date().toLocaleString();
        setLogs((prevLogs)=>[
                ...prevLogs,
                {
                    timestamp,
                    message
                }
            ]);
    };
    const handleConnect = async ()=>{
        if (!serverAddress || !serverId) {
            alert("Please provide both Server Address and Server ID.");
            return;
        }
        try {
            setStatus("Connecting...");
            appendLog("Attempting to connect to MCC server...");
            console.log("Connecting to:", `${backendUrl}/connect_mcc`); // Log the URL
            const response = await fetch(`${backendUrl}/connect_mcc`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    server_address: serverAddress,
                    server_id: serverId
                })
            });
            if (!response.ok) {
                const errorText = await response.text();
                console.error("Non-JSON response:", errorText);
                appendLog(`HTTP error! Status: ${response.status} - ${errorText}`);
                setStatus("Connection Error");
                return;
            }
            const result = await response.json();
            console.log("Backend response:", result);
            if (result.status === "success") {
                setStatus("Connected");
                appendLog(result.message);
                navigate("/main");
            } else {
                setStatus("Failed to Connect");
                appendLog(result.message);
            }
        } catch (error) {
            console.error("Error connecting to MCC:", error);
            setStatus("Connection Error");
            appendLog(`Connection error: ${error}`);
        }
    };
    // Debug when z-index changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log(`ServerWindow z-index updated to ${zIndex}`);
    }, [
        zIndex
    ]);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    //const isDarkMode = document.documentElement.classList.contains("dark");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkDarkMode = ()=>{
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        };
        // Initial check
        checkDarkMode();
        // Set up observer for theme changes
        const observer = new MutationObserver((mutations)=>{
            mutations.forEach((mutation)=>{
                if (mutation.attributeName === "class") {
                    checkDarkMode();
                }
            });
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [
                "class"
            ]
        });
        return ()=>observer.disconnect();
    }, []);
    console.log(`🎯 ServerWindow received zIndex:`, zIndex);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: windowZIndexes["ServerWindow"] || zIndex
        },
        onMouseDown: (e)=>{
            e.stopPropagation();
            console.log(`🖱️ Clicked ${windowName}, bringing to front`);
            bringWindowToFront(windowName);
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$rnd$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Rnd"], {
            position: position,
            size: {
                width: 500,
                height: "auto"
            },
            dragHandleClassName: "drag-handle",
            enableResizing: false,
            onDragStop: (e, d)=>{
                console.log(`📌 ServerWindow moved to: x=${d.x}, y=${d.y}`);
                setPosition({
                    x: d.x,
                    y: d.y
                }); // ✅ Updates position when dragged
            },
            style: {
                pointerEvents: "auto",
                backgroundColor: isDarkMode ? "#121212" : "white",
                borderRadius: "10px",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].popup,
                style: {
                    backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                    color: isDarkMode ? "#fff" : "#000"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header} drag-handle`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Server Connection"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation(); // ✅ Prevents accidental reopening
                                    onClose();
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                                style: {
                                    color: isDarkMode ? "white" : "black"
                                },
                                children: "✖"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Server Address",
                                value: serverAddress,
                                onChange: (e)=>setServerAddress(e.target.value),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Server ID",
                                value: serverId,
                                onChange: (e)=>setServerId(e.target.value),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleConnect,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].connectButton,
                                children: "Connect"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Status: ",
                            status
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                        lineNumber: 231,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logs,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Logs"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logWindow,
                                style: {
                                    maxHeight: "250px",
                                    overflowY: "scroll",
                                    border: "1px solid #ccc",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    backgroundColor: isDarkMode ? "#2a2a2a" : "#f5f5f5"
                                },
                                children: [
                                    logs.map((log, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "flex-start"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontWeight: "bold",
                                                        minWidth: "150px",
                                                        marginRight: "8px",
                                                        textAlign: "right"
                                                    },
                                                    children: [
                                                        "[",
                                                        log.timestamp,
                                                        "]"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        flex: 1
                                                    },
                                                    children: log.message
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: logsEndRef
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
            lineNumber: 171,
            columnNumber: 1
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this), document.body);
};
const __TURBOPACK__default__export__ = ServerWindow;
}}),
"[project]/src/components/WelcomeWindow/WelcomeWindow.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "buttonContainer": "WelcomeWindow-module__WdKywW__buttonContainer",
  "buttonWithNotification": "WelcomeWindow-module__WdKywW__buttonWithNotification",
  "dark": "WelcomeWindow-module__WdKywW__dark",
  "dateTime": "WelcomeWindow-module__WdKywW__dateTime",
  "logo": "WelcomeWindow-module__WdKywW__logo",
  "notificationDot": "WelcomeWindow-module__WdKywW__notificationDot",
  "welcomeButton": "WelcomeWindow-module__WdKywW__welcomeButton",
  "welcomeHeader": "WelcomeWindow-module__WdKywW__welcomeHeader",
  "welcomeWindow": "WelcomeWindow-module__WdKywW__welcomeWindow",
});
}}),
"[project]/src/components/WelcomeWindow/WelcomeWindow.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-draggable/build/cjs/cjs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ToTestList/ToTestList.tsx [app-ssr] (ecmascript)"); // Import the ToTestList popup window React Component
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ServerWindow/ServerWindow.tsx [app-ssr] (ecmascript)"); // Import Server Window Component
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/WelcomeWindow/WelcomeWindow.module.css [app-client] (css module)");
"use client";
;
;
;
;
;
;
// Use require if not using images.d.ts
//const logo = require("../../assets/logo.jpg");
const WelcomeWindow = ({ zIndex, onMouseDown, onClose, bringWindowToFront, windowZIndexes, zIndexCounter, openToTestList, openServerWindow })=>{
    const [dateTime, setDateTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showToTestList, setShowToTestList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showServerWindow, setShowServerWindow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasTests, setHasTests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Track if there are rows in the list
    const nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentZIndex, setCurrentZIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(zIndex);
    // Check if the page is in dark mode
    const isDarkMode = document.documentElement.classList.contains("dark");
    // Function to format date and time as DD/MM/YYYY HH:MM:SS
    const formatDateTime = (date)=>{
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    };
    // Update the date/time every second
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateDateTime = ()=>setDateTime(formatDateTime(new Date()));
        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        return ()=>clearInterval(interval);
    }, []);
    // Check for rows in localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedRows = localStorage.getItem("toTestListRows");
        const hasRows = savedRows ? JSON.parse(savedRows).length > 0 : false;
        // setHasTests is always passed a valid boolean (true or false).
        // may receive null or an empty string due to the logic
        // without true / false and just > 0
        setHasTests(hasRows);
    }, [
        showToTestList
    ]);
    const handleToTestListOpen = ()=>{
        console.log("Calling openToTestList");
        openToTestList(); // This will invoke the function from page.tsx
    };
    const handleToTestListClose = ()=>{
        console.log("ToTestList closed");
        setShowToTestList(false);
    };
    const handleServerWindowOpen = ()=>{
        console.log("Calling openServerWindow");
        openServerWindow(); // This will invoke the function from page.tsx
    };
    const handleServerWindowClose = ()=>{
        console.log("ServerWindow closed");
        setShowServerWindow(false);
    };
    const windowName = "WelcomeWindow";
    // Debug when z-index changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log(`WelcomeWindow z-index updated to ${zIndex}`);
    }, [
        zIndex
    ]);
    console.log(`🎯 WelcomeWindow rendered with zIndex:`, zIndex);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        nodeRef: nodeRef,
        handle: `.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].welcomeHeader}`,
        positionOffset: {
            x: "-50%",
            y: "-50%"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: nodeRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].welcomeWindow,
            style: {
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                minHeight: "200px",
                zIndex: windowZIndexes["WelcomeWindow"] || zIndex,
                background: isDarkMode ? "linear-gradient(135deg, #000000, #1a1a1a)" : "linear-gradient(135deg, #ffffff, #e6f7ff)"
            },
            onMouseDown: (e)=>{
                e.stopPropagation();
                console.log(`🖱️ Clicked ${windowName}, bringing to front`);
                bringWindowToFront(windowName);
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].welcomeHeader} drag-handle`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/assets/SaRCLogo.png",
                            alt: "Satellite Research Centre Logo",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo
                        }, void 0, false, {
                            fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                            lineNumber: 127,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Satellite Research Centre"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                            lineNumber: 128,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Satellite Automated Testing System"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                            lineNumber: 129,
                            columnNumber: 9
                        }, this),
                        dateTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dateTime,
                            children: dateTime
                        }, void 0, false, {
                            fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                            lineNumber: 130,
                            columnNumber: 22
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                    lineNumber: 126,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonWithNotification,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].welcomeButton,
                                    onClick: handleToTestListOpen,
                                    children: "Tests to Conduct"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                                    lineNumber: 134,
                                    columnNumber: 11
                                }, this),
                                hasTests && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notificationDot
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                                    lineNumber: 140,
                                    columnNumber: 24
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                            lineNumber: 133,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].welcomeButton,
                            onClick: handleServerWindowOpen,
                            children: "MCC"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                            lineNumber: 142,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                    lineNumber: 132,
                    columnNumber: 7
                }, this),
                showToTestList && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onClose: handleToTestListClose,
                    zIndex: windowZIndexes["ToTestList"] ?? zIndexCounter,
                    onMouseDown: ()=>bringWindowToFront("ToTestList"),
                    bringWindowToFront: bringWindowToFront,
                    windowZIndexes: windowZIndexes,
                    zIndexCounter: zIndexCounter
                }, void 0, false, {
                    fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                    lineNumber: 151,
                    columnNumber: 3
                }, this),
                showServerWindow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onClose: handleServerWindowClose,
                    zIndex: windowZIndexes.ServerWindow,
                    onMouseDown: ()=>bringWindowToFront("ServerWindow"),
                    bringWindowToFront: bringWindowToFront,
                    windowZIndexes: windowZIndexes,
                    zIndexCounter: zIndexCounter
                }, void 0, false, {
                    fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                    lineNumber: 162,
                    columnNumber: 3
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
            lineNumber: 106,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = WelcomeWindow;
}}),
"[project]/src/components/MainScreen/MainScreen.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "aboutButton": "MainScreen-module__4v2AYG__aboutButton",
  "aboutSection": "MainScreen-module__4v2AYG__aboutSection",
  "actionButtons": "MainScreen-module__4v2AYG__actionButtons",
  "addProfileButton": "MainScreen-module__4v2AYG__addProfileButton",
  "bottomSection": "MainScreen-module__4v2AYG__bottomSection",
  "cancelButton": "MainScreen-module__4v2AYG__cancelButton",
  "checkoutButton": "MainScreen-module__4v2AYG__checkoutButton",
  "checkoutSection": "MainScreen-module__4v2AYG__checkoutSection",
  "content": "MainScreen-module__4v2AYG__content",
  "dark": "MainScreen-module__4v2AYG__dark",
  "deleteButton": "MainScreen-module__4v2AYG__deleteButton",
  "docx": "MainScreen-module__4v2AYG__docx",
  "docx-wrapper": "MainScreen-module__4v2AYG__docx-wrapper",
  "downloadButton": "MainScreen-module__4v2AYG__downloadButton",
  "dragItem": "MainScreen-module__4v2AYG__dragItem",
  "dropHereText": "MainScreen-module__4v2AYG__dropHereText",
  "dropZone": "MainScreen-module__4v2AYG__dropZone",
  "dropZoneArea": "MainScreen-module__4v2AYG__dropZoneArea",
  "dropdownButton": "MainScreen-module__4v2AYG__dropdownButton",
  "droppableBox": "MainScreen-module__4v2AYG__droppableBox",
  "editButton": "MainScreen-module__4v2AYG__editButton",
  "editButtons": "MainScreen-module__4v2AYG__editButtons",
  "editModeButtons": "MainScreen-module__4v2AYG__editModeButtons",
  "editableArea": "MainScreen-module__4v2AYG__editableArea",
  "editableTextarea": "MainScreen-module__4v2AYG__editableTextarea",
  "emptyDropZone": "MainScreen-module__4v2AYG__emptyDropZone",
  "hidden": "MainScreen-module__4v2AYG__hidden",
  "hiddenDropZone": "MainScreen-module__4v2AYG__hiddenDropZone",
  "imageContainer": "MainScreen-module__4v2AYG__imageContainer",
  "imageWrapper": "MainScreen-module__4v2AYG__imageWrapper",
  "isDragging": "MainScreen-module__4v2AYG__isDragging",
  "isDropped": "MainScreen-module__4v2AYG__isDropped",
  "isEnabled": "MainScreen-module__4v2AYG__isEnabled",
  "isOver": "MainScreen-module__4v2AYG__isOver",
  "mainScreen": "MainScreen-module__4v2AYG__mainScreen",
  "menu": "MainScreen-module__4v2AYG__menu",
  "menuItem": "MainScreen-module__4v2AYG__menuItem",
  "profileActions": "MainScreen-module__4v2AYG__profileActions",
  "profileButtonGroup": "MainScreen-module__4v2AYG__profileButtonGroup",
  "profileContainer": "MainScreen-module__4v2AYG__profileContainer",
  "profileDropdown": "MainScreen-module__4v2AYG__profileDropdown",
  "profileHeading": "MainScreen-module__4v2AYG__profileHeading",
  "profilePage": "MainScreen-module__4v2AYG__profilePage",
  "profileSidebarItem": "MainScreen-module__4v2AYG__profileSidebarItem",
  "profileSubtext": "MainScreen-module__4v2AYG__profileSubtext",
  "profilesButton": "MainScreen-module__4v2AYG__profilesButton",
  "removeDraggedItemsButton": "MainScreen-module__4v2AYG__removeDraggedItemsButton",
  "removeImageButton": "MainScreen-module__4v2AYG__removeImageButton",
  "retractExpandSidebarButton": "MainScreen-module__4v2AYG__retractExpandSidebarButton",
  "richTextEditor": "MainScreen-module__4v2AYG__richTextEditor",
  "saveButton": "MainScreen-module__4v2AYG__saveButton",
  "scrollableContainer": "MainScreen-module__4v2AYG__scrollableContainer",
  "settingsButton": "MainScreen-module__4v2AYG__settingsButton",
  "settingsContainer": "MainScreen-module__4v2AYG__settingsContainer",
  "sidebar": "MainScreen-module__4v2AYG__sidebar",
  "sidebarHeader": "MainScreen-module__4v2AYG__sidebarHeader",
  "startTestButton": "MainScreen-module__4v2AYG__startTestButton",
  "threeDModelButton": "MainScreen-module__4v2AYG__threeDModelButton",
  "toggleButton": "MainScreen-module__4v2AYG__toggleButton",
  "topSection": "MainScreen-module__4v2AYG__topSection",
  "uploadButton": "MainScreen-module__4v2AYG__uploadButton",
  "uploadContainer": "MainScreen-module__4v2AYG__uploadContainer",
  "uploadNote": "MainScreen-module__4v2AYG__uploadNote",
  "uploadedFileName": "MainScreen-module__4v2AYG__uploadedFileName",
  "uploadedImage": "MainScreen-module__4v2AYG__uploadedImage",
});
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("path", () => require("path"));

module.exports = mod;
}}),
"[project]/src/components/MainScreen/DraggableBox.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dnd-kit/utilities/dist/utilities.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/MainScreen/MainScreen.module.css [app-client] (css module)");
;
;
;
;
;
const DraggableBox = ({ id, header, options, data, isDropped, isInBottomSection, removeDroppedItem, isCheckoutEditing = false, className })=>{
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSortable"])({
        id: id,
        data: {
            type: "draggable-item",
            isDraggable: !isDropped || isCheckoutEditing,
            isDropped: isDropped
        },
        disabled: false
    });
    const isDarkMode = document.documentElement.classList.contains("dark");
    const defaultBgColor = isDarkMode ? "#2d2d2d" : "#f8f9fa";
    const droppedBgColor = defaultBgColor;
    const shouldApplyEffect = isInBottomSection && isDropped && !isCheckoutEditing;
    // Calculate height dynamically based on the max number of options in all dropped items
    const baseHeight = 80; // Base height for header and padding
    const optionHeight = 24; // Height per option
    const maxVisibleOptions = 10; // Allow up to 10 options before scrolling
    const totalHeight = baseHeight + Math.min(options.length, maxVisibleOptions) * optionHeight;
    const requiresScroll = options.length > maxVisibleOptions;
    const [maxHeight, setMaxHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(totalHeight);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const allDroppedBoxes = document.querySelectorAll('[data-dropped="true"]');
        let highest = totalHeight;
        allDroppedBoxes.forEach((box)=>{
            const optionCount = box.querySelectorAll("label").length;
            const calculatedHeight = baseHeight + Math.min(optionCount, maxVisibleOptions) * optionHeight;
            if (calculatedHeight > highest) {
                highest = calculatedHeight;
            }
        });
        setMaxHeight(highest);
    }, [
        options.length,
        isDropped
    ]);
    const style = {
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(transform),
        transition: "background-color 0.3s ease-in-out, opacity 0.3s ease-in-out",
        padding: "8px",
        margin: "0",
        backgroundColor: isDropped ? droppedBgColor : defaultBgColor,
        border: "1px solid #ccc",
        borderRadius: "4px",
        cursor: shouldApplyEffect ? "not-allowed" : isDragging ? "grabbing" : "grab",
        display: "inline-block",
        width: "145px",
        height: `${maxHeight}px`,
        boxSizing: "border-box",
        opacity: shouldApplyEffect ? 0.5 : 1,
        color: isDarkMode ? "#ffffff" : "black",
        position: "relative",
        zIndex: isDragging ? 999 : 1,
        touchAction: "none",
        userSelect: "none",
        overflowY: requiresScroll ? "auto" : "hidden",
        overflowX: "hidden",
        whiteSpace: "normal",
        pointerEvents: shouldApplyEffect ? "none" : "auto"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        style: style,
        ...attributes,
        ...isDropped && !isCheckoutEditing ? {} : listeners,
        "data-draggable-id": id,
        "data-dropped": isDropped ? "true" : "false",
        className: className,
        children: [
            isDropped && removeDroppedItem && isCheckoutEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>removeDroppedItem(id),
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].removeDraggedItemsButton,
                children: "✖"
            }, void 0, false, {
                fileName: "[project]/src/components/MainScreen/DraggableBox.tsx",
                lineNumber: 118,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                style: {
                    textAlign: "center",
                    wordWrap: "break-word"
                },
                children: header
            }, void 0, false, {
                fileName: "[project]/src/components/MainScreen/DraggableBox.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        fontSize: "12px",
                        marginBottom: "4px",
                        textAlign: "left"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            disabled: isDropped && !isCheckoutEditing,
                            style: {
                                marginRight: "6px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainScreen/DraggableBox.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: option
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainScreen/DraggableBox.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    ]
                }, option, true, {
                    fileName: "[project]/src/components/MainScreen/DraggableBox.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MainScreen/DraggableBox.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = DraggableBox;
}}),
"[project]/src/components/MainScreen/MainScreen.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/MainScreen/MainScreen.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ToTestList/ToTestList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/mammoth/lib/index.js [app-ssr] (ecmascript)"); // Import mammoth for `.docx` extraction, npm install mammoth
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2d$preview$2f$dist$2f$docx$2d$preview$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/docx-preview/dist/docx-preview.mjs [app-ssr] (ecmascript)"); // npm install docx-preview
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/docx/dist/index.mjs [app-ssr] (ecmascript)"); // npm install docx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tiptap/starter-kit/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tiptap/extension-table/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$row$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tiptap/extension-table-row/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$cell$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tiptap/extension-table-cell/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$header$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tiptap/extension-table-header/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$bullet$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tiptap/extension-bullet-list/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$ordered$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tiptap/extension-ordered-list/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$list$2d$item$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tiptap/extension-list-item/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$turndown$2f$lib$2f$turndown$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/turndown/lib/turndown.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dnd-kit/core/dist/core.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$DraggableBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/MainScreen/DraggableBox.tsx [app-ssr] (ecmascript)"); // Import Draggable Box
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@tiptap/react/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const API_URL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000"; // fall back
const MainScreen = ({ openToTestList, openServerWindow, openModelWindow })=>{
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [profiles, setProfiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedProfile, setSelectedProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showToTestList, setShowToTestList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAbout, setShowAbout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadedText, setUploadedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // for aboutSection
    const [tempDescription, setTempDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [uploadedImages, setUploadedImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uploadedFileName, setUploadedFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [profileData, setProfileData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [showCheckout, setShowCheckout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCheckoutEditing, setIsCheckoutEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // For checkoutSection
    const [droppedItems, setDroppedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Manage draggable items
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "1",
            header: "OBC-1",
            options: [
                "eMMC"
            ],
            isDropped: false
        },
        {
            id: "2",
            header: "OBC-2",
            options: [
                "SD Card",
                "EEPROM"
            ],
            isDropped: false
        },
        {
            id: "3",
            header: "S-Band",
            options: [
                "Telemetry",
                "Ground Pass"
            ],
            isDropped: false
        },
        {
            id: "4",
            header: "UHF",
            options: [
                "Telemetry",
                "Ground Pass"
            ],
            isDropped: false
        },
        {
            id: "5",
            header: "HEPS",
            options: [
                "Solar Panel",
                "Heater",
                "Hdrm"
            ],
            isDropped: false
        },
        {
            id: "6",
            header: "ADCS",
            options: [
                "Version Check",
                "Gyroscope",
                "Magnetometer",
                "Star Tracker",
                "FOG",
                "Fine Sun Sensor",
                "Coarse Sun Sensor",
                "Earth Sensor",
                "Reaction Wheel",
                "Magnetic Torquer"
            ],
            isDropped: false
        },
        {
            id: "7",
            header: "GPS",
            options: [
                "Version Check"
            ],
            isDropped: false
        },
        {
            id: "8",
            header: "Propulsion",
            options: [
                "ECU-1 PMA",
                "ECU-1 PPU-1",
                "ECU-2 PMA",
                "ECU-2 PPU-2"
            ],
            isDropped: false
        },
        {
            id: "9",
            header: "PCS",
            options: [
                "SD Card"
            ],
            isDropped: false
        },
        {
            id: "10",
            header: "Payload",
            options: [
                "LEOCAM",
                "AOD"
            ],
            isDropped: false
        },
        {
            id: "11",
            header: "X-Band",
            options: [
                "Telecommand",
                "Telemetry"
            ],
            isDropped: false
        }
    ]);
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dummyState, setDummyState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Declare a state for forcing re-renders
    const [sortableKey, setSortableKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [show3DModel, setShow3DModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Manage pop-up visibility
    const [selectedProfileId, setSelectedProfileId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // In MainScreen.tsx, add this after your state declarations but before your functions
    const dragTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const removeDroppedItem = (itemId)=>{
        if (dragTimeoutRef.current) {
            clearTimeout(dragTimeoutRef.current);
        }
        console.log(`🗑️ Attempting to remove item ${itemId} from top section`);
        // ✅ Remove from `droppedItems`
        setDroppedItems((prev)=>{
            const updatedDroppedItems = prev.filter((item)=>item.id !== itemId);
            console.log("✅ Updated dropped items after removal:", updatedDroppedItems);
            return [
                ...updatedDroppedItems
            ]; // ✅ Force reactivity
        });
        // ✅ Ensure item is draggable again by updating `items` state
        setItems((prev)=>{
            const updatedItems = prev.map((item)=>{
                if (item.id === itemId) {
                    console.log(`✅ Resetting isDropped for item ${itemId}`);
                    return {
                        ...item,
                        isDropped: false
                    };
                }
                return item;
            });
            console.log("✅ Updated items after removal:", updatedItems);
            return [
                ...updatedItems
            ]; // ✅ Ensure a new array reference for reactivity
        });
        // ✅ Reset DOM attributes to make the item draggable again
        setTimeout(()=>{
            const bottomItem = document.querySelector(`[data-draggable-id="${itemId}"]`);
            if (bottomItem) {
                console.log(`✅ Resetting DOM attributes for item ${itemId}`);
                bottomItem.removeAttribute('data-dropped');
                bottomItem.style.pointerEvents = 'auto';
                bottomItem.style.opacity = '1';
                bottomItem.style.cursor = 'grab';
            }
        }, 50);
        setActiveId(null);
        setDragging(false);
        // ✅ FULL Reset of Drop Zones and SortableContext
        setTimeout(()=>{
            console.log("🔄 FORCING FULL Reset of Drop Zones and SortableContext...");
            setDroppedItems((prev)=>[
                    ...prev
                ]);
            setItems((prev)=>[
                    ...prev
                ]); // ✅ Ensure full re-render
            // ✅ Force SortableContext to reset
            setSortableKey((prev)=>prev + 1);
        }, 200);
    };
    const observerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const renderCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0); // Track how many times it runs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isCheckoutEditing) return;
        renderCount.current += 1;
        console.log(`🔁 useEffect executed ${renderCount.current} times`);
        const dropZones = document.querySelectorAll('[data-droppable-id]');
        dropZones.forEach((zone)=>{
            zone.setAttribute('data-droppable', 'true');
            zone.setAttribute('data-type', 'container');
        });
    }, [
        isCheckoutEditing
    ]);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log("🔄 Drop zones reloaded due to dragging state");
    }, [
        dragging
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchProfiles();
    }, []);
    const fetchProfiles = async ()=>{
        try {
            const response = await fetch(`${API_URL}/profiles`);
            if (!response.ok) {
                throw new Error("Failed to fetch profiles.");
            }
            const data = await response.json();
            let profileMap = {};
            data.forEach((profile)=>{
                profileMap[profile.name] = {
                    description: profile.description || "",
                    images: profile.images && Array.isArray(profile.images) ? profile.images.map((img)=>typeof img === "string" ? {
                            src: img,
                            alt: "Uploaded image"
                        } : img) : [],
                    uploadedFileName: profile.uploadedFileName || ""
                };
            });
            setProfiles(data);
            setProfileData(profileMap);
        } catch (error) {
            console.error("Error fetching profiles:", error);
        }
    };
    const toggleSidebar = ()=>setIsSidebarOpen(!isSidebarOpen);
    const toggleProfileDropdown = ()=>setIsProfileDropdownOpen(!isProfileDropdownOpen);
    const toggleAbout = ()=>{
        if (!selectedProfile) return;
        setShowAbout(!showAbout);
    };
    const addProfile = async ()=>{
        let profileName = prompt("Enter profile name:");
        if (!profileName || profileName.trim() === "") {
            alert("Profile name cannot be empty.");
            return;
        }
        profileName = profileName.trim();
        if (profiles.some((profile)=>profile.name.toLowerCase() === profileName.toLowerCase())) {
            alert("Profile name already exists! Choose a different name.");
            return;
        }
        try {
            const response = await fetch(`${API_URL}/profiles`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: profileName,
                    description: "",
                    images: []
                })
            });
            if (!response.ok) {
                const errorMessage = await response.json();
                throw new Error(errorMessage.error || "Failed to create profile.");
            }
            const newProfile = await response.json();
            setProfiles([
                ...profiles,
                newProfile
            ]);
            // Initialize profile data
            setProfileData((prev)=>({
                    ...prev,
                    [newProfile.name]: {
                        description: "",
                        images: []
                    }
                }));
        } catch (error) {
            console.error("Error adding profile:", error);
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert("An unexpected error occurred.");
            }
        }
    };
    const deleteProfile = async (profileName)=>{
        const confirmDelete = window.confirm(`Are you sure you want to delete the profile: ${profileName}?`);
        if (!confirmDelete) {
            return; // Cancel deletion if user clicks "Cancel"
        }
        try {
            await fetch(`${API_URL}/profiles/${profileName}`, {
                method: "DELETE"
            });
            setProfiles(profiles.filter((profile)=>profile.name !== profileName));
            setSelectedProfile(null);
        } catch (error) {
            console.error("Error deleting profile:", error);
        }
    };
    const convertImageToBase64 = async (imageUrl)=>{
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            return new Promise((resolve)=>{
                const reader = new FileReader();
                reader.onloadend = ()=>resolve(reader.result);
                reader.readAsDataURL(blob);
            });
        } catch (error) {
            console.error("Error converting image to Base64:", error);
            return "";
        }
    };
    let formattedHtml = "";
    const turndownService = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$turndown$2f$lib$2f$turndown$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
    turndownService.addRule("list", {
        filter: [
            "ul",
            "ol"
        ],
        replacement: function(content, node) {
            return node.outerHTML; // ✅ Typecast `node` as `HTMLElement`
        }
    });
    /* Function to handle file uploads */ const handleFileUpload = async (event)=>{
        if (!selectedProfile) return;
        const file = event.target.files?.[0];
        if (!file) return;
        const fileName = file.name;
        // ✅ Store the file name (avoid unnecessary re-renders)
        setProfileData((prevData)=>({
                ...prevData,
                [selectedProfile]: {
                    ...prevData[selectedProfile],
                    uploadedFileName: fileName
                }
            }));
        const reader = new FileReader();
        if (file.type === "text/plain") {
            reader.onload = (e)=>{
                if (e.target?.result) {
                    const uploadedText = e.target.result.toString().trim();
                    console.log("Extracted Text Content:", uploadedText);
                    setUploadedText(uploadedText);
                    autoSaveToDatabase(uploadedText, uploadedImages);
                }
            };
            reader.readAsText(file);
        } else if (file.name.endsWith(".docx")) {
            reader.onload = async (e)=>{
                if (e.target?.result instanceof ArrayBuffer) {
                    try {
                        let formattedHtml = "";
                        // ✅ Extract HTML using `mammoth.convertToHtml()`
                        const mammothResult = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].convertToHtml({
                            arrayBuffer: e.target.result
                        });
                        let extractedHtml = mammothResult.value.trim();
                        console.log("Mammoth Extracted Content (With Lists):", extractedHtml);
                        // ✅ Preserve bullet points & numbered lists properly
                        formattedHtml = extractedHtml.replace(/<p>\s*•\s*/g, "<ul><li>") // Fix unordered lists
                        .replace(/<p>\s*\d+\.\s*/g, "<ol><li>") // Fix ordered lists
                        .replace(/<\/p>\s*<p>/g, "</li><li>") // Ensure list items are correctly wrapped
                        .replace(/<\/p>/g, "</li></ul>") // Close unordered lists properly
                        .replace(/<\/ol><\/li>/g, "</ol>") // Close ordered lists properly
                        .replace(/<\/li><\/ul>(?!<\/li>)/g, "</ul>"); // Remove misaligned list endings
                        console.log("Final Processed HTML (Fixed Lists):", formattedHtml);
                        // ✅ Process `docx-preview` but DO NOT append it to the UI
                        const docxContainer = document.createElement("div");
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2d$preview$2f$dist$2f$docx$2d$preview$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderAsync"])(e.target.result, docxContainer);
                        // ✅ Extract only relevant content, ignoring `docx-preview` elements
                        const extractedBodyContent = docxContainer.querySelector("article")?.innerHTML || "";
                        // ✅ Ensure we use the most structured version
                        formattedHtml = extractedBodyContent.includes(formattedHtml) ? extractedBodyContent : extractedBodyContent || formattedHtml;
                        // ✅ Remove `docx-preview` elements BEFORE storing content
                        const tempContainer = document.createElement("div");
                        tempContainer.innerHTML = formattedHtml;
                        tempContainer.querySelectorAll("section.docx, .docx-wrapper").forEach((el)=>el.remove());
                        formattedHtml = tempContainer.innerHTML.trim();
                        // ✅ Ensure proper table & list styling
                        formattedHtml = formattedHtml.replace(/<table/g, '<table style="border-collapse: collapse; width: 100%; border: 1px solid black;"').replace(/<td/g, '<td style="padding: 8px; border: 1px solid black;"').replace(/<ul/g, '<ul style="padding-left: 20px; list-style-type: disc; margin-top: 10px; margin-bottom: 10px;"').replace(/<ol/g, '<ol style="padding-left: 20px; list-style-type: decimal; margin-top: 10px; margin-bottom: 10px;"').replace(/<li/g, '<li style="margin-bottom: 5px;"'); // ✅ Ensure list items have proper spacing
                        // ✅ Remove incorrect `<li>` wrapping on normal text
                        formattedHtml = formattedHtml.replace(/<li><strong>/g, "<p><strong>").replace(/<\/strong><\/li>/g, "</strong></p>");
                        // ✅ Extract images & convert to Base64
                        const extractedImages = await Promise.all(Array.from(docxContainer.querySelectorAll("img")).map(async (img)=>{
                            const base64Image = await convertImageToBase64(img.src);
                            return {
                                src: base64Image,
                                alt: img.alt || "Uploaded image"
                            };
                        }));
                        // ✅ Store only cleaned & formatted content without `docx-preview`
                        setUploadedText(formattedHtml.trim());
                        setUploadedImages(extractedImages);
                        autoSaveToDatabase(formattedHtml.trim(), extractedImages);
                        // ✅ Remove `docx-preview` from the DOM after processing
                        document.querySelectorAll("section.docx, .docx-wrapper").forEach((el)=>el.remove());
                    } catch (error) {
                        console.error("Error processing .docx:", error);
                    }
                }
            };
            reader.readAsArrayBuffer(file);
        } else if (file.type.startsWith("image/")) {
            reader.onload = (e)=>{
                if (e.target?.result) {
                    const base64Image = e.target.result.toString();
                    const newImage = {
                        src: base64Image,
                        alt: "Uploaded image"
                    };
                    setUploadedImages((prevImages)=>[
                            ...prevImages,
                            newImage
                        ]);
                    autoSaveToDatabase(uploadedText, [
                        ...uploadedImages,
                        newImage
                    ]);
                }
            };
            reader.readAsDataURL(file);
        } else {
            alert("Invalid file type. Please upload a .txt, .docx, or an image file.");
        }
    };
    /* ✅ Function to Start Editing */ const startEditing = ()=>{
        if (!selectedProfile) return;
        setTempDescription(profileData[selectedProfile]?.description || "");
        setIsEditing(true);
        if (editor) {
            editor.commands.setContent(profileData[selectedProfile]?.description || "");
        }
    };
    /* ✅ Function to Save Edited Description */ const saveEditedDescription = async ()=>{
        if (!selectedProfile) return;
        const formattedText = editor?.getHTML() || "";
        try {
            await fetch(`${API_URL}/profiles/${selectedProfile}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    description: formattedText,
                    images: uploadedImages,
                    uploadedFileName: profileData[selectedProfile]?.uploadedFileName || ""
                })
            });
            // ✅ Update profileData to reflect saved changes
            setProfileData((prevData)=>({
                    ...prevData,
                    [selectedProfile]: {
                        description: formattedText,
                        images: uploadedImages,
                        uploadedFileName: profileData[selectedProfile]?.uploadedFileName || ""
                    }
                }));
            setIsEditing(false);
        } catch (error) {
            console.error("Error saving description:", error);
        }
    };
    const removeImage = (index)=>{
        if (!selectedProfile || !isEditing) return; // ✅ Ensure we're in edit mode
        setProfileData((prevData)=>{
            const updatedImages = (prevData[selectedProfile]?.images || []).filter((_, i)=>i !== index);
            return {
                ...prevData,
                [selectedProfile]: {
                    ...prevData[selectedProfile],
                    images: updatedImages
                }
            };
        });
        // ✅ Temporarily update images during editing
        setUploadedImages((prevImages)=>prevImages.filter((_, i)=>i !== index));
    };
    /* ✅ Sanitize Extracted HTML */ /* ✅ Sanitize Extracted HTML */ const sanitizeHTML = (html)=>{
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        // ✅ Ensure lists (`<ul>`, `<ol>`, `<li>`) are preserved
        doc.querySelectorAll("p:empty, div:empty").forEach((node)=>node.remove());
        doc.querySelectorAll("br").forEach((node)=>node.remove());
        // ✅ Log extracted HTML to verify if lists exist before rendering
        console.log("Sanitized HTML Output:", doc.body.innerHTML);
        return doc.body.innerHTML;
    };
    /* Save to File */ const saveToFile = (format = "txt")=>{
        if (!uploadedText) {
            alert("No content to save.");
            return;
        }
        if (!selectedProfile) {
            alert("No profile selected.");
            return;
        }
        const sanitizedProfileName = selectedProfile.replace(/[^a-zA-Z0-9_-]/g, "");
        const readableText = convertHtmlToPlainText(uploadedText); // ✅ Convert HTML to plain text
        if (format === "txt") {
            const element = document.createElement("a");
            const file = new Blob([
                readableText
            ], {
                type: "text/plain"
            }); // ✅ Save as plain text
            element.href = URL.createObjectURL(file);
            element.download = `${sanitizedProfileName}_Specifications.txt`;
            document.body.appendChild(element);
            element.click();
        } else if (format === "docx") {
            const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Document"]({
                sections: [
                    {
                        properties: {},
                        children: readableText.split("\n").map((line)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](line))
                    }
                ]
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Packer"].toBlob(doc).then((blob)=>{
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = `${sanitizedProfileName}_Specifications.docx`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        }
    };
    const cancelEditing = ()=>{
        setIsEditing(false);
    };
    const autoSaveToDatabase = async (text, images)=>{
        if (!selectedProfile) {
            alert("No profile selected.");
            return;
        }
        try {
            const response = await fetch(`${API_URL}/profiles/${selectedProfile}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    description: text,
                    images: images.map((img)=>img.src),
                    uploadedFileName: profileData[selectedProfile]?.uploadedFileName || ""
                })
            });
            if (response.ok) {
                console.log("Profile updated automatically.");
            } else {
                console.error("Error saving profile.");
            }
        } catch (error) {
            console.error("Error saving profile:", error);
        }
    };
    const convertHtmlToPlainText = (html)=>{
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    };
    const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"])({
        extensions: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].configure({
                bulletList: false,
                orderedList: false
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].configure({
                resizable: true
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$row$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$cell$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$header$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$bullet$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$ordered$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$list$2d$item$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
        ],
        content: uploadedText,
        onUpdate: ({ editor })=>setTempDescription(editor.getHTML()),
        editorProps: {
            attributes: {
                class: "prose focus:outline-none"
            }
        },
        immediatelyRender: false
    });
    // Reset editor content when uploadedText changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (editor && uploadedText) {
            editor.commands.setContent(uploadedText); // Dynamically update editor content
        }
    }, [
        uploadedText,
        editor
    ]);
    const handleProfileSelect = (profileName)=>{
        if (!profileName) return; // Prevent errors
        setSelectedProfile(profileName);
        setShowAbout(false); // Close About Section when switching profiles
        // Ensure images are correctly set and do not become undefined
        const profile = profileData[profileName] || {
            description: "",
            images: [],
            uploadedFileName: ""
        };
        setUploadedImages(profile.images.length ? profile.images : []); // ✅ Ensure images exist
        setUploadedText(profile.description);
    };
    const toggleCheckout = ()=>{
        if (!selectedProfile) return;
        setShowCheckout(!showCheckout);
    };
    const toggleCheckoutEditMode = ()=>{
        console.log("Toggling Checkout Edit Mode");
        setIsCheckoutEditing((prev)=>!prev);
    };
    const { active } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDndContext"])(); // ✅ Get active drag item
    // Define droppable state
    const { isOver: isOverTop, setNodeRef: topSectionRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDroppable"])({
        id: "top-section",
        data: {
            type: "container",
            accepts: [
                "draggable-item"
            ],
            isDropZone: true
        },
        disabled: false
    });
    const { isOver: isOverBottom, setNodeRef: bottomSectionRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDroppable"])({
        id: "bottom-section",
        data: {
            accepts: [
                "draggable-item"
            ],
            type: "container"
        }
    });
    // ✅ Add this after the useDroppable hooks
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log("Active Dragging Type:", active?.data?.current?.type);
    }, [
        active
    ]);
    // add this state to track the background color, to match checkout section's dynamic background
    const [checkoutBgColor, setCheckoutBgColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('var(--background-color, #ffffff)');
    // Add an effect to update the background color when the theme changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateBackgroundColor = ()=>{
            const isDarkMode = document.documentElement.classList.contains('dark');
            setCheckoutBgColor(isDarkMode ? 'var(--dark-bg, #1a1a1a)' : 'var(--light-bg, #ffffff)');
        };
        // Initial update
        updateBackgroundColor();
        // Create observer for theme changes
        const observer = new MutationObserver((mutations)=>{
            mutations.forEach((mutation)=>{
                if (mutation.attributeName === 'class') {
                    updateBackgroundColor();
                }
            });
        });
        // Start observing theme changes
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [
                'class'
            ]
        });
        return ()=>observer.disconnect();
    }, []);
    const lastValidDropZoneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    let lastValidDropZone = null;
    // customCollisionDetection function
    // Update collision detection for better sensitivity
    // Replace your existing customCollisionDetection with this updated version
    const customCollisionDetection = (args)=>{
        const { collisionRect, droppableContainers } = args;
        const validDropZoneIds = new Set([
            "top-section",
            "bottom-section",
            "1",
            "2"
        ]);
        // Create expanded collision rect with larger detection area
        const expandedRect = {
            ...collisionRect,
            width: collisionRect.width + 60,
            height: collisionRect.height + 60,
            left: collisionRect.left - 30,
            right: collisionRect.right + 30,
            top: collisionRect.top - 30,
            bottom: collisionRect.bottom + 30
        };
        return droppableContainers.filter((container)=>validDropZoneIds.has(String(container.id))).map((container)=>{
            const element = document.querySelector(`[data-droppable-id="${container.id}"]`);
            if (!element) return null;
            const rect = element.getBoundingClientRect();
            const isTopSection = container.id === "top-section" || container.id === "1";
            // Add padding for better drop detection
            const adjustedRect = {
                top: rect.top - (isTopSection ? 40 : 20),
                bottom: rect.bottom + (isTopSection ? 40 : 20),
                left: rect.left - (isTopSection ? 40 : 20),
                right: rect.right + (isTopSection ? 40 : 20),
                width: rect.width + (isTopSection ? 80 : 40),
                height: rect.height + (isTopSection ? 80 : 40)
            };
            // More lenient intersection check
            const intersects = expandedRect.left < adjustedRect.right && expandedRect.right > adjustedRect.left && expandedRect.top < adjustedRect.bottom && expandedRect.bottom > adjustedRect.top;
            if (!intersects) return null;
            return {
                id: String(container.id),
                data: {
                    droppableContainer: {
                        id: String(container.id),
                        data: {
                            type: "container",
                            accepts: [
                                "draggable-item"
                            ],
                            isDropZone: isTopSection
                        }
                    },
                    value: isTopSection ? 2 : 1,
                    rect: adjustedRect
                }
            };
        }).filter((collision)=>collision !== null).sort((a, b)=>b.data.value - a.data.value);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isCheckoutEditing) return; // Prevent execution if not in edit mode
        console.log("✅ Registering Drop Zones (One-Time)");
        const topSection = document.querySelector('[data-droppable-id="1"]');
        const bottomSection = document.querySelector('[data-droppable-id="2"]');
        if (topSection) {
            topSection.setAttribute('data-droppable', 'true');
            topSection.setAttribute('data-type', 'container');
        }
        if (bottomSection) {
            bottomSection.setAttribute('data-droppable', 'true');
            bottomSection.setAttribute('data-type', 'container');
        }
        console.log("🔍 Found Drop Zones:", topSection, bottomSection);
        return ()=>{
            console.log("🛑 Cleaning up Drop Zones (Once)");
        };
    }, [
        isCheckoutEditing
    ]);
    const sensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSensors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerSensor"], {
        activationConstraint: {
            distance: 2,
            tolerance: 5
        }
    }));
    // Updated drag end handler
    const handleDragEnd = (event)=>{
        const { active, over } = event;
        setActiveId(null);
        setDragging(false);
        if (!over) {
            console.log("❌ No valid drop target detected");
            return;
        }
        const dropZoneId = String(over.id);
        const draggedItemId = String(active.id);
        console.log(`🛠️ Handling drop of item ${draggedItemId} into zone ${dropZoneId}`);
        const draggedItem = items.find((item)=>item.id === draggedItemId) || droppedItems.find((item)=>item.id === draggedItemId);
        if (!draggedItem) {
            console.log("❌ Dragged item not found");
            return;
        }
        const isTopSection = dropZoneId === "top-section" || dropZoneId === "1";
        const isBottomSection = dropZoneId === "bottom-section" || dropZoneId === "2";
        setDroppedItems((prevDroppedItems)=>{
            const alreadyInTop = prevDroppedItems.some((item)=>item.id === draggedItemId);
            if (isTopSection && !alreadyInTop) {
                console.log(`✅ Adding item ${draggedItemId} to top section`);
                return [
                    ...prevDroppedItems,
                    {
                        ...draggedItem,
                        isDropped: true
                    }
                ];
            }
            if (isBottomSection) {
                console.log(`✅ Removing item ${draggedItemId} from top section`);
                return prevDroppedItems.filter((item)=>item.id !== draggedItemId);
            }
            return prevDroppedItems;
        });
        setItems((prevItems)=>{
            const updatedItems = prevItems.map((item)=>item.id === draggedItemId ? {
                    ...item,
                    isDropped: isTopSection
                } : item);
            console.log("✅ Updated items after drop:", updatedItems);
            return [
                ...updatedItems
            ]; // Ensure a new array reference for reactivity
        });
        // ✅ FULL Reset of Drop Zones and SortableContext
        setTimeout(()=>{
            console.log("🔄 FORCING FULL Reset of Drop Zones and SortableContext...");
            setDroppedItems((prev)=>[
                    ...prev
                ]);
            setItems((prev)=>[
                    ...prev
                ]); // ✅ Ensure full re-render
            // ✅ Force SortableContext to reset
            setSortableKey((prev)=>prev + 1);
        }, 200);
    };
    // Add new effect to maintain drop zones
    const hasUpdatedDropZones = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false); // ✅ Prevent multiple updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isCheckoutEditing) return;
        const startTime = performance.now(); // Start time measurement
        console.log("⏳ Starting expensive operation...");
        // Simulating work
        const dropZones = document.querySelectorAll('[data-droppable-id]');
        dropZones.forEach((zone)=>{
            zone.setAttribute('data-droppable', 'true');
            zone.setAttribute('data-type', 'container');
        });
        const endTime = performance.now(); // End time measurement
        console.log(`⚡ Expensive operation took ${endTime - startTime}ms`);
    }, [
        isCheckoutEditing
    ]);
    // Add this useEffect to monitor state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const itemsStatus = items.map((item)=>({
                id: item.id,
                isDropped: item.isDropped
            }));
        console.log('Items status:', itemsStatus);
        console.log('Dropped items:', droppedItems);
    }, [
        items,
        droppedItems
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log("🔵 Drop zones mounted:", document.querySelectorAll("[data-droppable]"));
        setTimeout(()=>{
            const dropZones = document.querySelectorAll("[data-droppable]");
            console.log("✅ Drop zones found in DOM:", dropZones);
            dropZones.forEach((zone)=>{
                console.log("📍 Drop Zone Element:", zone);
                console.log("👉 Attributes:", zone.attributes);
                console.log("📏 Bounding Rect:", zone.getBoundingClientRect());
            });
        }, 500); // Delay ensures elements are fully rendered
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log("🔄 Drop zones reloaded. Current drop zones:", document.querySelectorAll("[data-droppable]"));
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.querySelectorAll("[data-droppable]").forEach((el)=>console.log("🔍 Found Drop Zone ID:", el.id));
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.querySelectorAll("[data-droppable]").forEach((el)=>console.log("✅ Drop Zone Element ID:", el.id));
    }, []);
    const [, setRender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setTimeout(()=>{
            console.log("✅ Forcing a re-render to ensure drop zones exist.");
            setRender((prev)=>!prev); // Toggle state to trigger re-render
        }, 100);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log("🛠️ isCheckoutEditing changed:", isCheckoutEditing);
    }, [
        isCheckoutEditing
    ]);
    // Update dropZoneStyle
    const dropZoneStyle = {
        minHeight: "250px",
        width: "100%",
        padding: "20px",
        boxSizing: "border-box",
        border: isOverTop ? "2px solid #2196F3" : "2px dashed #ccc",
        backgroundColor: isOverTop ? "rgba(33, 150, 243, 0.1)" : "transparent",
        position: "relative",
        zIndex: 1,
        touchAction: "none",
        userSelect: "none",
        overflow: "visible"
    };
    const handleSaveCheckout = async ()=>{
        if (!selectedProfile) {
            console.log("❌ No active profile selected");
            return;
        }
        try {
            const response = await fetch(`${API_URL}/checkout/save`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    profile_id: selectedProfile,
                    items: droppedItems
                })
            });
            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }
            const result = await response.json();
            console.log(`✅ Checkout items saved for profile ${selectedProfile}:`, result);
        } catch (error) {
            console.error("❌ Error saving checkout items:", error);
        }
    };
    const handleCancelCheckout = async ()=>{
        if (!selectedProfile) {
            console.log("❌ No active profile selected");
            return;
        }
        try {
            const response = await fetch(`${API_URL}/checkout/load/${selectedProfile}`);
            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }
            const result = await response.json();
            setDroppedItems(result.items);
            console.log(`🔄 Restored checkout items for profile ${selectedProfile}:`, result.items);
        } catch (error) {
            console.error("❌ Error loading previous checkout items:", error);
        }
    };
    const handleProfileChange = async (profileId)=>{
        console.log(`🔄 Profile changed: ${profileId}`); // ✅ Log profile change
        setSelectedProfile(profileId);
        try {
            const response = await fetch(`${API_URL}/checkout/load/${profileId}`);
            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }
            const result = await response.json();
            setDroppedItems(result.items || []);
            console.log(`✅ Loaded checkout items for profile ${profileId}:`, result.items);
        } catch (error) {
            console.error("❌ Error loading checkout items for profile:", error);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedProfile) {
            handleProfileChange(selectedProfile); // ✅ Load saved checkout items when profile changes
        }
    }, [
        selectedProfile
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainScreen,
        children: [
            !isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].retractExpandSidebarButton,
                onClick: toggleSidebar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaBars"], {}, void 0, false, {
                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                    lineNumber: 1101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                lineNumber: 1097,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar} ${isSidebarOpen ? "" : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hidden}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Menu"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                lineNumber: 1107,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toggleButton,
                                onClick: toggleSidebar,
                                children: "☰"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                lineNumber: 1108,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                        lineNumber: 1106,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menu,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuItem,
                                onClick: ()=>setSelectedProfile(null),
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                lineNumber: 1113,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuItem,
                                onClick: openToTestList,
                                children: "Tests to Conduct"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                lineNumber: 1116,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuItem,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileContainer,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profilesButton,
                                            onClick: toggleProfileDropdown,
                                            children: "Profiles"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1121,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileButtonGroup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownButton,
                                                    onClick: toggleProfileDropdown,
                                                    children: isProfileDropdownOpen ? "▲" : "▼"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1128,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addProfileButton,
                                                    onClick: addProfile,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPlus"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                        lineNumber: 1138,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1134,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1127,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 1120,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                lineNumber: 1119,
                                columnNumber: 9
                            }, this),
                            isProfileDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileDropdown,
                                children: profiles.map((profile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileSidebarItem,
                                        onClick: ()=>{
                                            handleProfileChange(profile.name); // ✅ Ensure checkout items load per profile
                                        },
                                        children: profile.name
                                    }, profile.id || profile.name, false, {
                                        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                        lineNumber: 1146,
                                        columnNumber: 13
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                lineNumber: 1144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                        lineNumber: 1112,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsButton,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCog"], {}, void 0, false, {
                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                lineNumber: 1162,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1161,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                        lineNumber: 1160,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                lineNumber: 1105,
                columnNumber: 5
            }, this),
            showToTestList && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setShowToTestList(false),
                zIndex: 10002,
                onMouseDown: ()=>console.log("Tests window clicked"),
                bringWindowToFront: ()=>console.log("Bringing Tests window to front"),
                windowZIndexes: {
                    ToTestList: 10002
                },
                zIndexCounter: 10003
            }, void 0, false, {
                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                lineNumber: 1168,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                children: selectedProfile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profilePage,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileHeading,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: selectedProfile
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 1183,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteButton,
                                    onClick: ()=>deleteProfile(selectedProfile),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTrash"], {}, void 0, false, {
                                        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                        lineNumber: 1188,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 1184,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutButton,
                            onClick: toggleAbout,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaInfoCircle"], {}, void 0, false, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 1194,
                                    columnNumber: 13
                                }, this),
                                " About/Specifications"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1193,
                            columnNumber: 11
                        }, this),
                        showAbout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutSection} ${document.documentElement.classList.contains("dark") ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].darkMode : ""}`,
                            children: [
                                isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "toolbar",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>editor?.chain().focus().toggleBulletList().run(),
                                                    children: "Bullet List"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1211,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>editor?.chain().focus().toggleOrderedList().run(),
                                                    children: "Ordered List"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1214,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1210,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EditorContent"], {
                                            editor: editor,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].richTextEditor
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1219,
                                            columnNumber: 19
                                        }, this),
                                        uploadedImages.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageContainer,
                                            children: uploadedImages.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: image.src,
                                                            alt: image.alt,
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadedImage
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                            lineNumber: 1226,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].removeImageButton,
                                                            onClick: ()=>removeImage(index),
                                                            children: "✖"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                            lineNumber: 1232,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1225,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1223,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imagePlaceholder,
                                            children: "No images uploaded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1242,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadContainer,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: ".txt, .docx",
                                                    onChange: handleFileUpload,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadInput
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1247,
                                                    columnNumber: 21
                                                }, this),
                                                selectedProfile && profileData[selectedProfile]?.uploadedFileName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Uploaded: ",
                                                        profileData[selectedProfile].uploadedFileName
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1256,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1246,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true) : /* ✅ Normal Mode: Display Formatted Content */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            dangerouslySetInnerHTML: {
                                                __html: sanitizeHTML(profileData[selectedProfile]?.description || "<p>No description available.</p>")
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1263,
                                            columnNumber: 19
                                        }, this),
                                        profileData[selectedProfile]?.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageContainer,
                                            children: selectedProfile && profileData[selectedProfile]?.images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: image.src,
                                                        alt: image.alt,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadedImage,
                                                        onError: (e)=>e.currentTarget.src = "/fallback-image.png"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                        lineNumber: 1273,
                                                        columnNumber: 27
                                                    }, this)
                                                }, index, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1272,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1270,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButtons,
                                    children: [
                                        !isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>saveToFile("txt"),
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].downloadButton,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaDownload"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                            lineNumber: 1294,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Save as .TXT"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1290,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>saveToFile("docx"),
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].downloadButton,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaDownload"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                            lineNumber: 1300,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Save as .DOCX"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1296,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: saveEditedDescription,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].saveButton,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheck"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                            lineNumber: 1310,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Save"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1306,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: cancelEditing,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimes"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                            lineNumber: 1316,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Cancel"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1312,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editButton,
                                            onClick: startEditing,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEdit"], {}, void 0, false, {
                                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                lineNumber: 1321,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1320,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 1287,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1199,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].testTypeHeader,
                            children: "Test Type"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1329,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkoutButton,
                            onClick: toggleCheckout,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaWrench"], {}, void 0, false, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 1331,
                                    columnNumber: 17
                                }, this),
                                " Checkout"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1330,
                            columnNumber: 15
                        }, this),
                        showCheckout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkoutSection,
                            style: {
                                backgroundColor: checkoutBgColor,
                                transition: 'background-color 0.3s ease'
                            },
                            children: [
                                (()=>{
                                    console.log("🔄 Checkout Section Re-rendered");
                                    return null;
                                })(),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkoutHeader,
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                marginRight: '10px'
                                            },
                                            children: "Test Selection:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1346,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editButton,
                                            onClick: toggleCheckoutEditMode,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEdit"], {}, void 0, false, {
                                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                lineNumber: 1348,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1347,
                                            columnNumber: 19
                                        }, this),
                                        !isCheckoutEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].startTestButton,
                                            style: {
                                                marginLeft: 'auto'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPlay"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1353,
                                                    columnNumber: 23
                                                }, this),
                                                " Start Test"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1352,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 1345,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DndContext"], {
                                    sensors: sensors,
                                    collisionDetection: customCollisionDetection,
                                    onDragStart: ({ active })=>{
                                        setActiveId(String(active.id));
                                        setDragging(true);
                                    },
                                    onDragEnd: handleDragEnd,
                                    onDragCancel: ()=>{
                                        setActiveId(null);
                                        setDragging(false);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: topSectionRef,
                                            id: "top-section",
                                            "data-id": "1",
                                            "data-droppable": "true",
                                            "data-droppable-id": "1",
                                            "data-type": "container",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topSection} dropZoneArea ${isOverTop ? "isOver" : ""}`,
                                            "data-is-over": isOverTop ? "true" : "false",
                                            style: dropZoneStyle,
                                            children: [
                                                droppedItems.length === 0 && isCheckoutEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: "absolute",
                                                        top: "50%",
                                                        left: "50%",
                                                        transform: "translate(-50%, -50%)",
                                                        color: "#666",
                                                        fontStyle: "italic"
                                                    },
                                                    children: "Drop items here"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1385,
                                                    columnNumber: 7
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SortableContext"], {
                                                    items: droppedItems,
                                                    strategy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalListSortingStrategy"],
                                                    children: droppedItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].droppableBox,
                                                            style: {
                                                                position: 'relative',
                                                                overflow: 'visible'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$DraggableBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                id: item.id,
                                                                header: item.header,
                                                                options: item.options,
                                                                data: {
                                                                    type: "draggable-item"
                                                                },
                                                                isDropped: true,
                                                                removeDroppedItem: removeDroppedItem,
                                                                isCheckoutEditing: isCheckoutEditing
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                                lineNumber: 1399,
                                                                columnNumber: 7
                                                            }, this)
                                                        }, `top-${item.id}`, false, {
                                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                            lineNumber: 1398,
                                                            columnNumber: 5
                                                        }, this))
                                                }, sortableKey, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1396,
                                                    columnNumber: 1
                                                }, this)
                                            ]
                                        }, "top-section", true, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1372,
                                            columnNumber: 3
                                        }, this),
                                        isCheckoutEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: bottomSectionRef,
                                            id: "bottom-section",
                                            "data-id": "2",
                                            "data-droppable": "true",
                                            "data-droppable-id": "2",
                                            "data-type": "container",
                                            "data-current": '{"type": "container"}',
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottomSection,
                                            style: {
                                                minHeight: "200px",
                                                padding: "20px",
                                                position: "relative",
                                                border: isOverBottom ? "2px solid #2196F3" : "2px dashed #ccc",
                                                backgroundColor: isOverBottom ? "rgba(33, 150, 243, 0.1)" : "transparent",
                                                touchAction: "none",
                                                userSelect: "none",
                                                display: "grid",
                                                gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                                                gap: "10px",
                                                pointerEvents: "auto" // Add this to ensure dragging works
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    children: "Available Components"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1438,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SortableContext"], {
                                                    items: items,
                                                    strategy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalListSortingStrategy"],
                                                    children: items.map((item)=>{
                                                        const isInTopSection = droppedItems.some((droppedItem)=>droppedItem.id === item.id);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dragItem,
                                                            "data-draggable-id": item.id,
                                                            "data-dropped": isInTopSection ? "true" : "false",
                                                            style: {
                                                                opacity: isInTopSection ? 0.3 : 1,
                                                                pointerEvents: isInTopSection ? 'none' : 'auto',
                                                                cursor: isInTopSection ? 'not-allowed' : 'grab'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$DraggableBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                id: item.id,
                                                                header: item.header,
                                                                options: item.options,
                                                                data: {
                                                                    type: "draggable-item"
                                                                },
                                                                isDropped: isInTopSection,
                                                                isInBottomSection: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                                lineNumber: 1455,
                                                                columnNumber: 7
                                                            }, this)
                                                        }, `bottom-${item.id}`, false, {
                                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                            lineNumber: 1444,
                                                            columnNumber: 5
                                                        }, this);
                                                    })
                                                }, sortableKey, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1439,
                                                    columnNumber: 3
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1415,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DragOverlay"], {
                                            children: activeId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$DraggableBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                id: activeId,
                                                header: (items.find((item)=>item.id === activeId) || droppedItems.find((item)=>item.id === activeId))?.header || "",
                                                options: (items.find((item)=>item.id === activeId) || droppedItems.find((item)=>item.id === activeId))?.options || [],
                                                data: {
                                                    type: "draggable-item"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                lineNumber: 1472,
                                                columnNumber: 5
                                            }, this) : null
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1470,
                                            columnNumber: 1
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 1358,
                                    columnNumber: 17
                                }, this),
                                isCheckoutEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editModeButtons,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].saveButton,
                                            onClick: ()=>{
                                                handleSaveCheckout();
                                                toggleCheckoutEditMode(); // ✅ Exit edit mode after saving
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheck"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1489,
                                                    columnNumber: 21
                                                }, this),
                                                " Save"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1485,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                                            onClick: ()=>{
                                                handleCancelCheckout();
                                                toggleCheckoutEditMode(); // ✅ Exit edit mode after canceling
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimes"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1495,
                                                    columnNumber: 21
                                                }, this),
                                                " Cancel"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1491,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 1484,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1336,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ThreeDModelViewerHeader,
                            children: "Satellite Model Viewer"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1501,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].threeDModelButton,
                            onClick: (e)=>{
                                e.preventDefault();
                                console.log("3D Model button clicked");
                                const profile = profiles.find((p)=>p.name === selectedProfile);
                                // Always pass a valid profile ID (default to 1 if not found)
                                const profileId = profile?.id || 1;
                                console.log(`Opening 3D Model window for profile ID: ${profileId}`);
                                openModelWindow(profileId);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCube"], {}, void 0, false, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 1515,
                                    columnNumber: 3
                                }, this),
                                " 3D Model"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1503,
                            columnNumber: 1
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                    lineNumber: 1181,
                    columnNumber: 9
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profilePage,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileHeading,
                            children: "Satellite Automated Testing System"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1521,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileSubtext,
                            children: "Navigate using the side panel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1522,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                    lineNumber: 1520,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                lineNumber: 1179,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
        lineNumber: 1095,
        columnNumber: 3
    }, this);
};
const __TURBOPACK__default__export__ = MainScreen;
}}),
"[project]/src/components/ModelWindow/ThreeDModelWindow.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "closeButton": "ThreeDModelWindow-module__5BjfpW__closeButton",
  "content": "ThreeDModelWindow-module__5BjfpW__content",
  "dark": "ThreeDModelWindow-module__5BjfpW__dark",
  "drag-handle": "ThreeDModelWindow-module__5BjfpW__drag-handle",
  "header": "ThreeDModelWindow-module__5BjfpW__header",
  "light": "ThreeDModelWindow-module__5BjfpW__light",
  "popup": "ThreeDModelWindow-module__5BjfpW__popup",
  "popup-show": "ThreeDModelWindow-module__5BjfpW__popup-show",
});
}}),
"[project]/src/components/ModelWindow/ThreeDModelWindow.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SatelliteModel": (()=>SatelliteModel),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-draggable/build/cjs/cjs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/ModelWindow/ThreeDModelWindow.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$2895749c$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__F__as__useLoader$3e$__ = __turbopack_import__("[project]/node_modules/@react-three/fiber/dist/events-2895749c.esm.js [app-ssr] (ecmascript) <export F as useLoader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$2895749c$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__ = __turbopack_import__("[project]/node_modules/@react-three/fiber/dist/events-2895749c.esm.js [app-ssr] (ecmascript) <export C as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const API_URL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000"; // ✅ Ensure correct backend URL
const SatelliteModel = ({ modelPath, scale = 40, position = [
    0,
    0,
    0
], onColorExtracted })=>{
    if (!modelPath) {
        console.warn("⚠️ No model path provided, showing fallback.");
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "error-message",
            children: "⚠️ No model path provided"
        }, void 0, false, {
            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
            lineNumber: 34,
            columnNumber: 12
        }, this);
    }
    console.log(`🔍 Attempting to load GLTF model from: ${modelPath}`);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gltf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$2895749c$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__F__as__useLoader$3e$__["useLoader"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLTFLoader"], modelPath);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (gltf.scene && onColorExtracted) {
            const firstMesh = gltf.scene.children.find((obj)=>obj instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Mesh);
            if (firstMesh && firstMesh.material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.MeshStandardMaterial) {
                const color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Color(firstMesh.material.color.getHex());
                onColorExtracted(color);
            }
        }
    }, [
        gltf,
        onColorExtracted
    ]);
    // Rotate model slightly over time
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$2895749c$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])(()=>{
        if (ref.current) {
            ref.current.rotation.y += 0.003;
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
        ref: ref,
        object: gltf.scene,
        position: position,
        scale: hovered ? scale * 1.2 : scale,
        onPointerOver: ()=>setHovered(true),
        onPointerOut: ()=>setHovered(false)
    }, void 0, false, {
        fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
};
;
const ThreeDModelWindow = ({ profileId, zIndex, onMouseDown, onClose, bringWindowToFront, windowZIndexes, zIndexCounter })=>{
    console.log(`ThreeDModelWindow rendering with zIndex: ${zIndex}, profileId: ${profileId}`);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modelPath, setModelPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""); // ✅ Always a string
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [canvasBgColor, setCanvasBgColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("#ffffff"); // ✅ Only for Canvas background
    const windowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null); // ✅ Ensure `ref` is initialized
    const [currentZIndex, setCurrentZIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(zIndex); // ✅ Track `zIndex`
    // Portal management
    const [portalElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        // Create portal element once
        const element = document.createElement("div");
        element.id = "modelWindow-root";
        document.body.appendChild(element);
        return element;
    });
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: (window.innerWidth - 500) / 2,
        y: (window.innerHeight - 400) / 2
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log(`📌 Appending ThreeDModelWindow to body`);
        document.body.appendChild(portalElement);
        return ()=>{
            console.log(`🗑️ Removing ThreeDModelWindow from body`);
            if (portalElement && portalElement.parentNode) {
                portalElement.parentNode.removeChild(portalElement);
            }
        };
    }, [
        portalElement
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check dark mode
        const checkDarkMode = ()=>{
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        };
        checkDarkMode();
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [
                "class"
            ]
        });
        // Cleanup portal when component unmounts
        return ()=>{
            observer.disconnect();
            if (portalElement && portalElement.parentNode) {
                portalElement.parentNode.removeChild(portalElement);
            }
        };
    }, [
        portalElement
    ]);
    // Fetch model path
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!profileId) return;
        const fetchModelPath = async ()=>{
            try {
                console.log(`Fetching model path for profile ${profileId}`);
                const response = await fetch(`${API_URL}/api/profile/${profileId}`);
                const data = await response.json();
                if (data.model_path) {
                    // Construct full path
                    const fullPath = data.model_path.startsWith('http') ? data.model_path : `${API_URL}${data.model_path}`;
                    console.log(`Model path: ${fullPath}`);
                    setModelPath(fullPath);
                    setErrorMessage(null);
                } else {
                    console.log('No model path found');
                    setModelPath("");
                    setErrorMessage("No model file available. Upload a .glb file below.");
                }
            } catch (err) {
                console.error("Error fetching model:", err);
                setModelPath("");
                setErrorMessage("Could not load model information");
            }
        };
        fetchModelPath();
    }, [
        profileId
    ]);
    // ✅ Handle File Upload
    const handleFileUpload = async ()=>{
        if (!selectedFile) return;
        if (!selectedFile.name.endsWith(".glb")) {
            alert("❌ Invalid file format! Please upload a .glb file.");
            return;
        }
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("profile_id", String(profileId));
        try {
            const response = await fetch(`${API_URL}/api/upload-glb`, {
                method: "POST",
                body: formData
            });
            if (!response.ok) throw new Error("❌ Failed to upload model");
            const data = await response.json();
            if (data.model_path) {
                const fullModelPath = data.model_path.startsWith("http") ? data.model_path : `${API_URL}${data.model_path}`; // Ensure full backend path
                console.log(`✅ Model uploaded successfully. New path: ${fullModelPath}`);
                setModelPath(fullModelPath);
                setErrorMessage(null);
            } else {
                throw new Error("❌ No model path returned from server");
            }
        } catch (error) {
            console.error("❌ Upload Error:", error);
            setErrorMessage("❌ Failed to upload file.");
        }
    };
    const windowName = "ThreeDModelWindow";
    // ✅ Handle File Selection
    const handleFileSelect = (event)=>{
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]); // Store the selected file
        }
    };
    console.log(`🎯 ThreeDModelWindow received zIndex:`, zIndex);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!windowZIndexes || windowZIndexes["ThreeDModelWindow"] === undefined) {
            console.warn("⚠️ windowZIndexes missing ThreeDModelWindow, using default zIndex.");
            setCurrentZIndex(zIndexCounter); // Fallback to prevent error
        } else {
            setCurrentZIndex(windowZIndexes["ThreeDModelWindow"]);
        }
    }, [
        windowZIndexes,
        zIndexCounter
    ]);
    // Log when component mounts or z-index changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log(`ThreeDModelWindow rendered with zIndex: ${zIndex}, profileId: ${profileId}`);
    }, [
        zIndex,
        profileId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (bringWindowToFront) {
            console.log("Bringing 3D model window to front");
            bringWindowToFront("ThreeDModelWindow");
        }
    }, [
        bringWindowToFront
    ]);
    console.log(`ThreeDModelWindow rendering with zIndex: ${zIndex}, profileId: ${profileId}`);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        nodeRef: nodeRef,
        handle: ".drag-handle",
        position: position,
        onStop: (e, data)=>{
            console.log(`📌 ThreeDModelWindow moved to: x=${data.x}, y=${data.y}`);
            setPosition({
                x: data.x,
                y: data.y
            }); // ✅ Updates position when dragged
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: nodeRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].popup,
            style: {
                position: "fixed",
                zIndex: windowZIndexes["ThreeDModelWindow"] || zIndex
            },
            onMouseDown: (e)=>{
                e.stopPropagation();
                console.log(`🖱️ Clicked ${windowName}, bringing to front`);
                bringWindowToFront(windowName);
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header} drag-handle`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Satellite Model Viewer"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                            style: {
                                color: isDarkMode ? "white" : "black"
                            },
                            onClick: (e)=>{
                                e.stopPropagation();
                                onClose();
                            },
                            children: "✖"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                    children: [
                        errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorMessage,
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                            lineNumber: 301,
                            columnNumber: 13
                        }, this) : modelPath ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                            camera: {
                                position: [
                                    5,
                                    5,
                                    10
                                ],
                                fov: 50
                            },
                            style: {
                                width: "100%",
                                height: "400px",
                                backgroundColor: canvasBgColor
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                                    intensity: 0.8
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                                    position: [
                                        10,
                                        10,
                                        10
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                    lineNumber: 308,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SatelliteModel, {
                                    modelPath: modelPath,
                                    onColorExtracted: (color)=>setCanvasBgColor(color.getStyle())
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                    lineNumber: 309,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrbitControls"], {}, void 0, false, {
                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                    lineNumber: 310,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                            lineNumber: 303,
                            columnNumber: 1
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorMessage,
                            children: "⚠️ No file uploaded"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                            lineNumber: 314,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadSection,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Accepted formats: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: ".glb"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                            lineNumber: 319,
                                            columnNumber: 34
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                    lineNumber: 319,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    accept: ".glb",
                                    ref: fileInputRef,
                                    onChange: (event)=>event.target.files && setSelectedFile(event.target.files[0]),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadInput
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, this),
                                selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadButton,
                                    onClick: handleFileUpload,
                                    children: "Upload 3D Model file"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                    lineNumber: 329,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                            lineNumber: 318,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                    lineNumber: 298,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
            lineNumber: 273,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
        lineNumber: 264,
        columnNumber: 5
    }, this), portalElement);
};
const __TURBOPACK__default__export__ = ThreeDModelWindow;
}}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* implement routing using react-router-dom, 
you’ll need to transform your page.tsx into an entry point for routing. */ /* npm install react-router-dom */ __turbopack_esm__({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/WelcomeWindow/WelcomeWindow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/MainScreen/MainScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ToTestList/ToTestList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ServerWindow/ServerWindow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ModelWindow/ThreeDModelWindow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-router-dom/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Page() {
    const [showToTestList, setShowToTestList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showServerWindow, setShowServerWindow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showThreeDModelWindow, setShowThreeDModelWindow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [zIndexCounter, setZIndexCounter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10000); // Base z-index
    const [windowZIndexes, setWindowZIndexes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        WelcomeWindow: 10000,
        ToTestList: 10001,
        ServerWindow: 10002,
        ThreeDModelWindow: 10003
    });
    // ✅ initial individual z-index
    const [threeDModelProfileId, setThreeDModelProfileId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1); // Default value for testing
    const [showWelcomeWindow, setShowWelcomeWindow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const savedState = localStorage.getItem("showWelcomeWindow");
        return savedState ? JSON.parse(savedState) : true;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem("showWelcomeWindow", JSON.stringify(showWelcomeWindow));
    }, [
        showWelcomeWindow
    ]);
    const bringWindowToFront = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((windowName)=>{
        setWindowZIndexes((prevIndexes)=>{
            const newZIndexes = {
                ...prevIndexes
            };
            const highestZIndex = Math.max(...Object.values(prevIndexes), 10000);
            newZIndexes[windowName] = highestZIndex + 1;
            console.log(`✅ Updated z-index for ${windowName}: ${newZIndexes[windowName]}`);
            return {
                ...newZIndexes
            }; // ✅ Force React to detect state change
        });
        setZIndexCounter((prevCounter)=>prevCounter + 1);
    }, [
        setWindowZIndexes
    ]);
    // Window open/close handlers
    const openToTestList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        console.log("Opening ToTestList window");
        setShowToTestList(true);
        bringWindowToFront("ToTestList");
    }, [
        bringWindowToFront
    ]);
    const closeToTestList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        console.log("Closing ToTestList window");
        setShowToTestList(false);
    }, []);
    const openServerWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        console.log("Opening ServerWindow window");
        setShowServerWindow(true);
        bringWindowToFront("ServerWindow");
    }, [
        bringWindowToFront
    ]);
    const closeServerWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        console.log("Closing ServerWindow window");
        setShowServerWindow(false);
    }, []);
    const openModelWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((profileId = 1)=>{
        console.log("🛰️ Opening 3D Model window for profile:", profileId);
        setShowThreeDModelWindow(false); // 🔴 Ensure it unmounts first
        setTimeout(()=>{
            setThreeDModelProfileId(profileId);
            setShowThreeDModelWindow(true); // ✅ Then re-mount the window
            console.log("🔼 Bringing 3D Model window to front");
            bringWindowToFront("ThreeDModelWindow");
        }, 50); // ⏳ Small delay to ensure proper state update
    }, [
        bringWindowToFront
    ]);
    const closeModelWindow = ()=>{
        console.log("🔴 Closing ThreeDModelWindow...");
        setShowThreeDModelWindow(false);
    };
    const closeWelcomeWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        console.log("Closing WelcomeWindow");
        setShowWelcomeWindow(false);
    }, []);
    // Debug logging
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log("Window States:", {
            welcome: showWelcomeWindow,
            toTestList: showToTestList,
            server: showServerWindow,
            model: showThreeDModelWindow
        });
        console.log("Z-Index Values:", windowZIndexes);
    }, [
        showWelcomeWindow,
        showToTestList,
        showServerWindow,
        showThreeDModelWindow,
        windowZIndexes
    ]);
    // Log window z-indexes when they change (for debugging)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log("Current window z-indexes:", windowZIndexes);
    }, [
        windowZIndexes
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log("===== WINDOW STATE DEBUG =====");
        console.log("showToTestList:", showToTestList);
        console.log("showServerWindow:", showServerWindow);
        console.log("showThreeDModelWindow:", showThreeDModelWindow);
        console.log("windowZIndexes:", windowZIndexes);
        console.log("=============================");
    }, [
        showToTestList,
        showServerWindow,
        showThreeDModelWindow,
        windowZIndexes
    ]);
    const DebugControl = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: 'fixed',
                bottom: 50,
                right: 10,
                backgroundColor: 'rgba(0,0,0,0.8)',
                color: 'white',
                padding: '10px',
                borderRadius: '5px',
                zIndex: 99999,
                fontSize: '12px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "Window Controls:"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setShowToTestList(!showToTestList),
                    children: [
                        showToTestList ? 'Hide' : 'Show',
                        " Tests"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setShowServerWindow(!showServerWindow),
                    children: [
                        showServerWindow ? 'Hide' : 'Show',
                        " Server"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setShowThreeDModelWindow(!showThreeDModelWindow),
                    children: [
                        showThreeDModelWindow ? 'Hide' : 'Show',
                        " Model"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: '5px'
                    },
                    children: "Z-Indexes:"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        "Tests: ",
                        windowZIndexes.ToTestList
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        "Server: ",
                        windowZIndexes.ServerWindow
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        "Model: ",
                        windowZIndexes.ThreeDModelWindow
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 128,
            columnNumber: 7
        }, this);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log(`📌 showThreeDModelWindow changed:`, showThreeDModelWindow);
    }, [
        showThreeDModelWindow
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrowserRouter"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/main",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            openToTestList: openToTestList,
                            openServerWindow: openServerWindow,
                            openModelWindow: openModelWindow
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    background: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    padding: '5px',
                    zIndex: 99999,
                    fontSize: '12px'
                },
                children: [
                    "Welcome: ",
                    showWelcomeWindow ? 'SHOW' : 'HIDE',
                    " (z:",
                    windowZIndexes.WelcomeWindow,
                    ")",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 184,
                        columnNumber: 92
                    }, this),
                    "ToTestList: ",
                    showToTestList ? 'SHOW' : 'HIDE',
                    " (z:",
                    windowZIndexes.ToTestList,
                    ")",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 185,
                        columnNumber: 89
                    }, this),
                    "ServerWindow: ",
                    showServerWindow ? 'SHOW' : 'HIDE',
                    " (z:",
                    windowZIndexes.ServerWindow,
                    ")",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 186,
                        columnNumber: 95
                    }, this),
                    "ModelWindow: ",
                    showThreeDModelWindow ? 'SHOW' : 'HIDE',
                    " (z:",
                    windowZIndexes.ThreeDModelWindow,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 174,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "window-container",
                children: Object.entries(windowZIndexes).sort(([, zIndexA], [, zIndexB])=>(zIndexA || 0) - (zIndexB || 0)) // ✅ Ensure valid comparison
                .map(([windowName])=>{
                    if (windowName === "WelcomeWindow" && showWelcomeWindow) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        zIndex: windowZIndexes.WelcomeWindow || 10000,
                        onMouseDown: ()=>bringWindowToFront("WelcomeWindow"),
                        onClose: ()=>setShowWelcomeWindow(false),
                        bringWindowToFront: bringWindowToFront,
                        windowZIndexes: windowZIndexes,
                        zIndexCounter: zIndexCounter,
                        openToTestList: openToTestList,
                        openServerWindow: openServerWindow
                    }, "WelcomeWindow", false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 196,
                        columnNumber: 1
                    }, this);
                    if (windowName === "ToTestList" && showToTestList) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        zIndex: windowZIndexes.ToTestList,
                        onMouseDown: ()=>bringWindowToFront("ToTestList"),
                        onClose: closeToTestList,
                        bringWindowToFront: bringWindowToFront,
                        windowZIndexes: windowZIndexes,
                        zIndexCounter: zIndexCounter
                    }, "ToTestList", false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this);
                    if (windowName === "ServerWindow" && showServerWindow) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        zIndex: windowZIndexes.ServerWindow,
                        onMouseDown: ()=>bringWindowToFront("ServerWindow"),
                        onClose: closeServerWindow,
                        bringWindowToFront: bringWindowToFront,
                        windowZIndexes: windowZIndexes,
                        zIndexCounter: zIndexCounter
                    }, "ServerWindow", false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this);
                    if (windowName === "ThreeDModelWindow" && showThreeDModelWindow) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        profileId: threeDModelProfileId ?? 1,
                        zIndex: windowZIndexes.ThreeDModelWindow,
                        onMouseDown: ()=>bringWindowToFront("ThreeDModelWindow"),
                        onClose: closeModelWindow,
                        bringWindowToFront: bringWindowToFront,
                        windowZIndexes: windowZIndexes,
                        zIndexCounter: zIndexCounter
                    }, "ThreeDModelWindow", false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 237,
                        columnNumber: 11
                    }, this);
                    return null;
                })
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 161,
        columnNumber: 7
    }, this);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__a78029._.js.map