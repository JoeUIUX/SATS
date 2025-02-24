(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_a500ee._.js", {

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
  "form": "ToTestList-module__vY2V8W__form",
  "header": "ToTestList-module__vY2V8W__header",
  "popup": "ToTestList-module__vY2V8W__popup",
  "popup-show": "ToTestList-module__vY2V8W__popup-show",
  "selectedRow": "ToTestList-module__vY2V8W__selectedRow",
  "table": "ToTestList-module__vY2V8W__table",
});
}}),
"[project]/src/components/ToTestList/ToTestList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/ToTestList/ToTestList.module.css [app-client] (css module)");
;
var _s = __turbopack_refresh__.signature();
;
;
const ToTestList = ({ onClose })=>{
    _s();
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        test: "",
        satellite: "",
        loggedBy: ""
    });
    // Load data from localStorage only when the component is mounted
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToTestList.useEffect": ()=>{
            const savedRows = localStorage.getItem("toTestListRows");
            if (savedRows) {
                console.log("Loaded from localStorage:", JSON.parse(savedRows));
                setRows(JSON.parse(savedRows)); // Restore the list from localStorage
            } else {
                console.log("No saved data found in localStorage.");
            }
        }
    }["ToTestList.useEffect"], []); // Run only once when mounted
    // Save data to localStorage whenever rows change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToTestList.useEffect": ()=>{
            if (rows.length > 0) {
                console.log("Saving to localStorage:", rows);
                localStorage.setItem("toTestListRows", JSON.stringify(rows));
            } else {
                console.log("Skipping save to localStorage because rows are empty.");
            }
        }
    }["ToTestList.useEffect"], [
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
    // Determine if the page is in dark mode
    const isDarkMode = document.documentElement.classList.contains("dark");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].popup,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Tests to Conduct"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                        style: {
                            color: isDarkMode ? "white" : "black"
                        },
                        children: "✖"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "S/N"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Test"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Satellite"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Date/Time Logged"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Logged by"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: rows.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                style: {
                                    backgroundColor: row.selected ? isDarkMode ? "#003366" // Dark blue for dark mode
                                     : "#d0ebff" // Light blue for light mode
                                     : "transparent"
                                },
                                className: row.selected ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectedRow : "",
                                onClick: ()=>toggleRowSelection(index),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: row.sn
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: row.test
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: row.satellite
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: row.dateTime
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: row.loggedBy
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Test",
                        value: form.test,
                        onChange: (e)=>setForm({
                                ...form,
                                test: e.target.value
                            })
                    }, void 0, false, {
                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Satellite",
                        value: form.satellite,
                        onChange: (e)=>setForm({
                                ...form,
                                satellite: e.target.value
                            })
                    }, void 0, false, {
                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Logged by",
                        value: form.loggedBy,
                        onChange: (e)=>setForm({
                                ...form,
                                loggedBy: e.target.value
                            })
                    }, void 0, false, {
                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: addItem,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addButton,
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: deleteItem,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteButton,
                        children: "Delete Item"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: clearList,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].clearButton,
                        children: "Clear List"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
};
_s(ToTestList, "0GDlrjWbjSSVr3sW1uAbSGlDSLI=");
_c = ToTestList;
const __TURBOPACK__default__export__ = ToTestList;
var _c;
__turbopack_refresh__.register(_c, "ToTestList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ServerWindow/ServerWindow.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "closeButton": "ServerWindow-module__wfqmlq__closeButton",
  "connectButton": "ServerWindow-module__wfqmlq__connectButton",
  "dark": "ServerWindow-module__wfqmlq__dark",
  "form": "ServerWindow-module__wfqmlq__form",
  "header": "ServerWindow-module__wfqmlq__header",
  "input": "ServerWindow-module__wfqmlq__input",
  "popup": "ServerWindow-module__wfqmlq__popup",
  "popup-show": "ServerWindow-module__wfqmlq__popup-show",
});
}}),
"[project]/src/components/ServerWindow/ServerWindow.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/ServerWindow/ServerWindow.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$SYFQ2XB5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-router/dist/development/chunk-SYFQ2XB5.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const ServerWindow = ({ onClose })=>{
    _s();
    const [serverAddress, setServerAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [serverId, setServerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Disconnected");
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const logsEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$SYFQ2XB5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    const backendUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServerWindow.useEffect": ()=>{
            if (logsEndRef.current) {
                logsEndRef.current.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    }["ServerWindow.useEffect"], [
        logs
    ]);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].popup,
        style: {
            width: "500px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Server Connection"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                        style: {
                            color: typeof document !== "undefined" && document.documentElement.classList.contains("dark") ? "white" : "black"
                        },
                        children: "✖"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Server Address",
                        value: serverAddress,
                        onChange: (e)=>setServerAddress(e.target.value),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Server ID",
                        value: serverId,
                        onChange: (e)=>setServerId(e.target.value),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleConnect,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].connectButton,
                        children: "Connect"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Status: ",
                    status
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logs,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Logs"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logWindow,
                        style: {
                            maxHeight: "250px",
                            overflowY: "scroll",
                            border: "1px solid #ccc",
                            padding: "10px",
                            borderRadius: "5px"
                        },
                        children: [
                            logs.map((log, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "flex-start"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                flex: 1
                                            },
                                            children: log.message
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: logsEndRef
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
};
_s(ServerWindow, "yKy+QXHs6ngkfskQM0U0yEBUfXg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$SYFQ2XB5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"]
    ];
});
_c = ServerWindow;
const __TURBOPACK__default__export__ = ServerWindow;
var _c;
__turbopack_refresh__.register(_c, "ServerWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
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
  "welcomeWindow": "WelcomeWindow-module__WdKywW__welcomeWindow",
});
}}),
"[project]/src/components/WelcomeWindow/WelcomeWindow.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ToTestList/ToTestList.tsx [app-client] (ecmascript)"); // Import the ToTestList popup window React Component
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ServerWindow/ServerWindow.tsx [app-client] (ecmascript)"); // Import Server Window Component
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/WelcomeWindow/WelcomeWindow.module.css [app-client] (css module)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
// Use require if not using images.d.ts
//const logo = require("../../assets/logo.jpg");
const WelcomeWindow = ()=>{
    _s();
    const [dateTime, setDateTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showToTestList, setShowToTestList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showServerWindow, setShowServerWindow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasTests, setHasTests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Track if there are rows in the list
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WelcomeWindow.useEffect": ()=>{
            const updateDateTime = {
                "WelcomeWindow.useEffect.updateDateTime": ()=>setDateTime(formatDateTime(new Date()))
            }["WelcomeWindow.useEffect.updateDateTime"];
            updateDateTime();
            const interval = setInterval(updateDateTime, 1000);
            return ({
                "WelcomeWindow.useEffect": ()=>clearInterval(interval)
            })["WelcomeWindow.useEffect"];
        }
    }["WelcomeWindow.useEffect"], []);
    // Check for rows in localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WelcomeWindow.useEffect": ()=>{
            const savedRows = localStorage.getItem("toTestListRows");
            const hasRows = savedRows ? JSON.parse(savedRows).length > 0 : false;
            // setHasTests is always passed a valid boolean (true or false).
            // may receive null or an empty string due to the logic
            // without true / false and just > 0
            setHasTests(hasRows);
        }
    }["WelcomeWindow.useEffect"], [
        showToTestList
    ]);
    const handleToTestListOpen = ()=>{
        console.log("Opening ToTestList...");
        setShowToTestList(true);
    };
    const handleToTestListClose = ()=>{
        console.log("ToTestList closed");
        setShowToTestList(false);
    };
    const handleServerWindowOpen = ()=>{
        console.log("Opening ServerWindow...");
        setShowServerWindow(true);
    };
    const handleServerWindowClose = ()=>{
        console.log("ServerWindow closed");
        setShowServerWindow(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].welcomeWindow,
        style: {
            background: isDarkMode ? "linear-gradient(135deg, #000000, #1a1a1a)" : "linear-gradient(135deg, #ffffff, #e6f7ff)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].welcomeHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/assets/SaRCLogo.png",
                        alt: "Satellite Research Centre Logo",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Satellite Research Centre"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Satellite Automated Testing System"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    dateTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dateTime,
                        children: dateTime
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                        lineNumber: 83,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonWithNotification,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].welcomeButton,
                                onClick: handleToTestListOpen,
                                children: "Tests to Conduct"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            hasTests && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notificationDot
                            }, void 0, false, {
                                fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                                lineNumber: 93,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].welcomeButton,
                        onClick: handleServerWindowOpen,
                        children: "MCC"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            showToTestList && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: handleToTestListClose
            }, void 0, false, {
                fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                lineNumber: 102,
                columnNumber: 26
            }, this),
            showServerWindow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: handleServerWindowClose
            }, void 0, false, {
                fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                lineNumber: 103,
                columnNumber: 28
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
};
_s(WelcomeWindow, "Kk453Yi43w+vDu85P90sSoxEQCc=");
_c = WelcomeWindow;
const __TURBOPACK__default__export__ = WelcomeWindow;
var _c;
__turbopack_refresh__.register(_c, "WelcomeWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/MainScreen/MainScreen.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "aboutButton": "MainScreen-module__4v2AYG__aboutButton",
  "aboutSection": "MainScreen-module__4v2AYG__aboutSection",
  "actionButtons": "MainScreen-module__4v2AYG__actionButtons",
  "addProfileButton": "MainScreen-module__4v2AYG__addProfileButton",
  "cancelButton": "MainScreen-module__4v2AYG__cancelButton",
  "checkoutButton": "MainScreen-module__4v2AYG__checkoutButton",
  "checkoutSection": "MainScreen-module__4v2AYG__checkoutSection",
  "content": "MainScreen-module__4v2AYG__content",
  "dark": "MainScreen-module__4v2AYG__dark",
  "deleteButton": "MainScreen-module__4v2AYG__deleteButton",
  "docx": "MainScreen-module__4v2AYG__docx",
  "docx-wrapper": "MainScreen-module__4v2AYG__docx-wrapper",
  "downloadButton": "MainScreen-module__4v2AYG__downloadButton",
  "dropdownButton": "MainScreen-module__4v2AYG__dropdownButton",
  "editButton": "MainScreen-module__4v2AYG__editButton",
  "editButtons": "MainScreen-module__4v2AYG__editButtons",
  "editableTextarea": "MainScreen-module__4v2AYG__editableTextarea",
  "hidden": "MainScreen-module__4v2AYG__hidden",
  "imageContainer": "MainScreen-module__4v2AYG__imageContainer",
  "imageWrapper": "MainScreen-module__4v2AYG__imageWrapper",
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
  "removeImageButton": "MainScreen-module__4v2AYG__removeImageButton",
  "retractExpandSidebarButton": "MainScreen-module__4v2AYG__retractExpandSidebarButton",
  "richTextEditor": "MainScreen-module__4v2AYG__richTextEditor",
  "saveButton": "MainScreen-module__4v2AYG__saveButton",
  "settingsButton": "MainScreen-module__4v2AYG__settingsButton",
  "settingsContainer": "MainScreen-module__4v2AYG__settingsContainer",
  "sidebar": "MainScreen-module__4v2AYG__sidebar",
  "sidebarHeader": "MainScreen-module__4v2AYG__sidebarHeader",
  "toggleButton": "MainScreen-module__4v2AYG__toggleButton",
  "uploadButton": "MainScreen-module__4v2AYG__uploadButton",
  "uploadContainer": "MainScreen-module__4v2AYG__uploadContainer",
  "uploadNote": "MainScreen-module__4v2AYG__uploadNote",
  "uploadedFileName": "MainScreen-module__4v2AYG__uploadedFileName",
  "uploadedImage": "MainScreen-module__4v2AYG__uploadedImage",
});
}}),
"[project]/src/components/MainScreen/MainScreen.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/MainScreen/MainScreen.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ToTestList/ToTestList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/mammoth/lib/index.js [app-client] (ecmascript)"); // Import mammoth for `.docx` extraction, npm install mammoth
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2d$preview$2f$dist$2f$docx$2d$preview$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/docx-preview/dist/docx-preview.mjs [app-client] (ecmascript)"); // npm install docx-preview
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/docx/dist/index.mjs [app-client] (ecmascript)"); // npm install docx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tiptap/starter-kit/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tiptap/extension-table/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$row$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tiptap/extension-table-row/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$cell$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tiptap/extension-table-cell/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$header$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tiptap/extension-table-header/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$bullet$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tiptap/extension-bullet-list/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$ordered$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tiptap/extension-ordered-list/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$list$2d$item$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tiptap/extension-list-item/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$turndown$2f$lib$2f$turndown$2e$browser$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/turndown/lib/turndown.browser.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@tiptap/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
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
const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_BACKEND_URL ? `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_BACKEND_URL}/profiles` : "http://127.0.0.1:5000/profiles"; // fall back
// Ensure this is correct
const MainScreen = ()=>{
    _s();
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [profiles, setProfiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedProfile, setSelectedProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showToTestList, setShowToTestList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAbout, setShowAbout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadedText, setUploadedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tempDescription, setTempDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [uploadedImages, setUploadedImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uploadedFileName, setUploadedFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [profileData, setProfileData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showCheckout, setShowCheckout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainScreen.useEffect": ()=>{
            fetchProfiles();
        }
    }["MainScreen.useEffect"], []);
    const fetchProfiles = async ()=>{
        try {
            const response = await fetch(`${API_URL}`);
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
            const response = await fetch(`${API_URL}`, {
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
            await fetch(`${API_URL}/${profileName}`, {
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
    const turndownService = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$turndown$2f$lib$2f$turndown$2e$browser$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
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
                        const mammothResult = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].convertToHtml({
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
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2d$preview$2f$dist$2f$docx$2d$preview$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderAsync"])(e.target.result, docxContainer);
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
            await fetch(`${API_URL}/${selectedProfile}`, {
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
            const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Document"]({
                sections: [
                    {
                        properties: {},
                        children: readableText.split("\n").map((line)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"](line))
                    }
                ]
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Packer"].toBlob(doc).then((blob)=>{
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
            const response = await fetch(`${API_URL}/${selectedProfile}`, {
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
    const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"])({
        extensions: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                bulletList: false,
                orderedList: false
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                resizable: true
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$row$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$cell$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$header$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$bullet$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$ordered$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$list$2d$item$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        ],
        content: uploadedText,
        onUpdate: {
            "MainScreen.useEditor[editor]": ({ editor })=>setTempDescription(editor.getHTML())
        }["MainScreen.useEditor[editor]"],
        editorProps: {
            attributes: {
                class: "prose focus:outline-none"
            }
        },
        immediatelyRender: false
    });
    // Reset editor content when uploadedText changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainScreen.useEffect": ()=>{
            if (editor && uploadedText) {
                editor.commands.setContent(uploadedText); // Dynamically update editor content
            }
        }
    }["MainScreen.useEffect"], [
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
    const toggleEditMode = ()=>{
        setIsEditing(!isEditing);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainScreen,
        children: [
            !isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].retractExpandSidebarButton,
                onClick: toggleSidebar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBars"], {}, void 0, false, {
                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                    lineNumber: 545,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                lineNumber: 541,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar} ${isSidebarOpen ? "" : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hidden}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Menu"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                lineNumber: 551,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toggleButton,
                                onClick: toggleSidebar,
                                children: "☰"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                lineNumber: 552,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                        lineNumber: 550,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menu,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuItem,
                                onClick: ()=>setSelectedProfile(null),
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                lineNumber: 557,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuItem,
                                onClick: ()=>setShowToTestList(true),
                                children: "Tests to Conduct"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                lineNumber: 560,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuItem,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileContainer,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profilesButton,
                                            onClick: toggleProfileDropdown,
                                            children: "Profiles"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 565,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileButtonGroup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownButton,
                                                    onClick: toggleProfileDropdown,
                                                    children: isProfileDropdownOpen ? "▲" : "▼"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 572,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addProfileButton,
                                                    onClick: addProfile,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlus"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                        lineNumber: 582,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 578,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 571,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 564,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                lineNumber: 563,
                                columnNumber: 9
                            }, this),
                            isProfileDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileDropdown,
                                children: profiles.map((profile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileSidebarItem,
                                        onClick: ()=>handleProfileSelect(profile.name),
                                        children: profile.name
                                    }, profile.id || profile.name, false, {
                                        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                        lineNumber: 590,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                lineNumber: 588,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                        lineNumber: 556,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsButton,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCog"], {}, void 0, false, {
                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                lineNumber: 603,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 602,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                        lineNumber: 601,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                lineNumber: 549,
                columnNumber: 5
            }, this),
            showToTestList && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setShowToTestList(false)
            }, void 0, false, {
                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                lineNumber: 608,
                columnNumber: 24
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                children: selectedProfile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profilePage,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileHeading,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: selectedProfile
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 614,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteButton,
                                    onClick: ()=>deleteProfile(selectedProfile),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTrash"], {}, void 0, false, {
                                        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                        lineNumber: 619,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 615,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 613,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutButton,
                            onClick: toggleAbout,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInfoCircle"], {}, void 0, false, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 625,
                                    columnNumber: 13
                                }, this),
                                " About/Specifications"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 624,
                            columnNumber: 11
                        }, this),
                        showAbout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutSection} ${document.documentElement.classList.contains("dark") ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].darkMode : ""}`,
                            children: [
                                isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "toolbar",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>editor?.chain().focus().toggleBulletList().run(),
                                                    children: "Bullet List"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 642,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>editor?.chain().focus().toggleOrderedList().run(),
                                                    children: "Ordered List"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 645,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 641,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EditorContent"], {
                                            editor: editor,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].richTextEditor
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 650,
                                            columnNumber: 19
                                        }, this),
                                        uploadedImages.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageContainer,
                                            children: uploadedImages.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: image.src,
                                                            alt: image.alt,
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadedImage
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                            lineNumber: 657,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].removeImageButton,
                                                            onClick: ()=>removeImage(index),
                                                            children: "✖"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                            lineNumber: 663,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 656,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 654,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imagePlaceholder,
                                            children: "No images uploaded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 673,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadContainer,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: ".txt, .docx",
                                                    onChange: handleFileUpload,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadInput
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 678,
                                                    columnNumber: 21
                                                }, this),
                                                selectedProfile && profileData[selectedProfile]?.uploadedFileName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Uploaded: ",
                                                        profileData[selectedProfile].uploadedFileName
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 687,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 677,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true) : /* ✅ Normal Mode: Display Formatted Content */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            dangerouslySetInnerHTML: {
                                                __html: sanitizeHTML(profileData[selectedProfile]?.description || "<p>No description available.</p>")
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 694,
                                            columnNumber: 19
                                        }, this),
                                        profileData[selectedProfile]?.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageContainer,
                                            children: profileData[selectedProfile].images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: image.src,
                                                        alt: image.alt,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadedImage,
                                                        onError: (e)=>e.currentTarget.src = "/fallback-image.png"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                        lineNumber: 704,
                                                        columnNumber: 27
                                                    }, this)
                                                }, index, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 703,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 701,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButtons,
                                    children: [
                                        !isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>saveToFile("txt"),
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].downloadButton,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaDownload"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                            lineNumber: 725,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Save as .TXT"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 721,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>saveToFile("docx"),
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].downloadButton,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaDownload"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                            lineNumber: 731,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Save as .DOCX"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 727,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: saveEditedDescription,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].saveButton,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheck"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                            lineNumber: 741,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Save"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 737,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: cancelEditing,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimes"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                            lineNumber: 747,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Cancel"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 743,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editButton,
                                            onClick: startEditing,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEdit"], {}, void 0, false, {
                                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                lineNumber: 752,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 751,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 718,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 630,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].testTypeHeader,
                            children: "Test Type"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 760,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkoutButton,
                            onClick: toggleCheckout,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWrench"], {}, void 0, false, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 762,
                                    columnNumber: 17
                                }, this),
                                " Checkout"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 761,
                            columnNumber: 15
                        }, this),
                        showCheckout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkoutSection,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkoutHeader,
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                marginRight: '10px'
                                            },
                                            children: "Test Selection:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 767,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editButton,
                                            onClick: toggleEditMode,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEdit"], {}, void 0, false, {
                                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                lineNumber: 769,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 768,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 766,
                                    columnNumber: 17
                                }, this),
                                isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editModeContainer,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editModeList
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 774,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editModeButtons,
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                                gap: '10px',
                                                marginTop: '10px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].saveButton,
                                                    onClick: toggleEditMode,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheck"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                            lineNumber: 779,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Save"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 778,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                                                    onClick: toggleEditMode,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimes"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                            lineNumber: 782,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Cancel"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 781,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 777,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 773,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 787,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 765,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                    lineNumber: 612,
                    columnNumber: 9
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profilePage,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileHeading,
                            children: "Satellite Automated Testing System"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 796,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileSubtext,
                            children: "Navigate using the side panel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 797,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                    lineNumber: 795,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                lineNumber: 610,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
        lineNumber: 539,
        columnNumber: 3
    }, this);
};
_s(MainScreen, "D2jU9hELpkw5e+oAojOT4cU6YM8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"]
    ];
});
_c = MainScreen;
const __TURBOPACK__default__export__ = MainScreen;
var _c;
__turbopack_refresh__.register(_c, "MainScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* implement routing using react-router-dom, 
you’ll need to transform your page.tsx into an entry point for routing. */ /* npm install react-router-dom */ __turbopack_esm__({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/WelcomeWindow/WelcomeWindow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/MainScreen/MainScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$SYFQ2XB5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-router/dist/development/chunk-SYFQ2XB5.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$SYFQ2XB5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserRouter"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$SYFQ2XB5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Routes"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$SYFQ2XB5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                    path: "/",
                    element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 17,
                        columnNumber: 34
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$SYFQ2XB5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                    path: "/main",
                    element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 18,
                        columnNumber: 38
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Page;
var _c;
__turbopack_refresh__.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_a500ee._.js.map