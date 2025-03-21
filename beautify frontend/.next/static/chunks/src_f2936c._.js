(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_f2936c._.js", {

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
"[project]/src/components/MainScreen/DraggableBox.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dnd-kit/utilities/dist/utilities.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/MainScreen/MainScreen.module.css [app-client] (css module)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const DraggableBox = ({ id, header, options, data, isDropped, isInBottomSection, removeDroppedItem, isCheckoutEditing = false, className })=>{
    _s();
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSortable"])({
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
    const [maxHeight, setMaxHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(totalHeight);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DraggableBox.useEffect": ()=>{
            const allDroppedBoxes = document.querySelectorAll('[data-dropped="true"]');
            let highest = totalHeight;
            allDroppedBoxes.forEach({
                "DraggableBox.useEffect": (box)=>{
                    const optionCount = box.querySelectorAll("label").length;
                    const calculatedHeight = baseHeight + Math.min(optionCount, maxVisibleOptions) * optionHeight;
                    if (calculatedHeight > highest) {
                        highest = calculatedHeight;
                    }
                }
            }["DraggableBox.useEffect"]);
            setMaxHeight(highest);
        }
    }["DraggableBox.useEffect"], [
        options.length,
        isDropped
    ]);
    const style = {
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(transform),
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        style: style,
        ...attributes,
        ...isDropped && !isCheckoutEditing ? {} : listeners,
        "data-draggable-id": id,
        "data-dropped": isDropped ? "true" : "false",
        className: className,
        children: [
            isDropped && removeDroppedItem && isCheckoutEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>removeDroppedItem(id),
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].removeDraggedItemsButton,
                children: "✖"
            }, void 0, false, {
                fileName: "[project]/src/components/MainScreen/DraggableBox.tsx",
                lineNumber: 118,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
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
            options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        fontSize: "12px",
                        marginBottom: "4px",
                        textAlign: "left"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(DraggableBox, "NDgia11IKBV3fhz+Cvtho7Tznvg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSortable"]
    ];
});
_c = DraggableBox;
const __TURBOPACK__default__export__ = DraggableBox;
var _c;
__turbopack_refresh__.register(_c, "DraggableBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dnd-kit/core/dist/core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$DraggableBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/MainScreen/DraggableBox.tsx [app-client] (ecmascript)"); // Import Draggable Box
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
;
;
;
;
const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000"; // fall back
const MainScreen = ({ openToTestList, closeToTestList, openServerWindow, openModelWindow, closeModelWindow, showToTestList, showThreeDModelWindow, threeDModelProfileId, windowZIndexes, bringWindowToFront, zIndexCounter// ✅ Use counter from props
 })=>{
    _s();
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [profiles, setProfiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedProfile, setSelectedProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showAbout, setShowAbout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadedText, setUploadedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // for aboutSection
    const [tempDescription, setTempDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [uploadedImages, setUploadedImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uploadedFileName, setUploadedFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [profileData, setProfileData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showCheckout, setShowCheckout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCheckoutEditing, setIsCheckoutEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // For checkoutSection
    const [droppedItems, setDroppedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Manage draggable items
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
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
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dummyState, setDummyState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Declare a state for forcing re-renders
    const [sortableKey, setSortableKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [show3DModel, setShow3DModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Manage pop-up visibility
    const [selectedProfileId, setSelectedProfileId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // In MainScreen.tsx, add this after your state declarations but before your functions
    const dragTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
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
    const observerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const renderCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0); // Track how many times it runs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainScreen.useEffect": ()=>{
            if (!isCheckoutEditing) return;
            renderCount.current += 1;
            console.log(`🔁 useEffect executed ${renderCount.current} times`);
            const dropZones = document.querySelectorAll('[data-droppable-id]');
            dropZones.forEach({
                "MainScreen.useEffect": (zone)=>{
                    zone.setAttribute('data-droppable', 'true');
                    zone.setAttribute('data-type', 'container');
                }
            }["MainScreen.useEffect"]);
        }
    }["MainScreen.useEffect"], [
        isCheckoutEditing
    ]);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainScreen.useEffect": ()=>{
            console.log("🔄 Drop zones reloaded due to dragging state");
        }
    }["MainScreen.useEffect"], [
        dragging
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainScreen.useEffect": ()=>{
            fetchProfiles();
        }
    }["MainScreen.useEffect"], []);
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
    const toggleCheckoutEditMode = ()=>{
        console.log("Toggling Checkout Edit Mode");
        setIsCheckoutEditing((prev)=>!prev);
    };
    const { active } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDndContext"])(); // ✅ Get active drag item
    // Define droppable state
    const { isOver: isOverTop, setNodeRef: topSectionRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDroppable"])({
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
    const { isOver: isOverBottom, setNodeRef: bottomSectionRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDroppable"])({
        id: "bottom-section",
        data: {
            accepts: [
                "draggable-item"
            ],
            type: "container"
        }
    });
    // ✅ Add this after the useDroppable hooks
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainScreen.useEffect": ()=>{
            console.log("Active Dragging Type:", active?.data?.current?.type);
        }
    }["MainScreen.useEffect"], [
        active
    ]);
    // add this state to track the background color, to match checkout section's dynamic background
    const [checkoutBgColor, setCheckoutBgColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('var(--background-color, #ffffff)');
    // Add an effect to update the background color when the theme changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainScreen.useEffect": ()=>{
            const updateBackgroundColor = {
                "MainScreen.useEffect.updateBackgroundColor": ()=>{
                    const isDarkMode = document.documentElement.classList.contains('dark');
                    setCheckoutBgColor(isDarkMode ? 'var(--dark-bg, #1a1a1a)' : 'var(--light-bg, #ffffff)');
                }
            }["MainScreen.useEffect.updateBackgroundColor"];
            // Initial update
            updateBackgroundColor();
            // Create observer for theme changes
            const observer = new MutationObserver({
                "MainScreen.useEffect": (mutations)=>{
                    mutations.forEach({
                        "MainScreen.useEffect": (mutation)=>{
                            if (mutation.attributeName === 'class') {
                                updateBackgroundColor();
                            }
                        }
                    }["MainScreen.useEffect"]);
                }
            }["MainScreen.useEffect"]);
            // Start observing theme changes
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    'class'
                ]
            });
            return ({
                "MainScreen.useEffect": ()=>observer.disconnect()
            })["MainScreen.useEffect"];
        }
    }["MainScreen.useEffect"], []);
    const lastValidDropZoneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainScreen.useEffect": ()=>{
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
            return ({
                "MainScreen.useEffect": ()=>{
                    console.log("🛑 Cleaning up Drop Zones (Once)");
                }
            })["MainScreen.useEffect"];
        }
    }["MainScreen.useEffect"], [
        isCheckoutEditing
    ]);
    const sensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerSensor"], {
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
    const hasUpdatedDropZones = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false); // ✅ Prevent multiple updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainScreen.useEffect": ()=>{
            if (!isCheckoutEditing) return;
            const startTime = performance.now(); // Start time measurement
            console.log("⏳ Starting expensive operation...");
            // Simulating work
            const dropZones = document.querySelectorAll('[data-droppable-id]');
            dropZones.forEach({
                "MainScreen.useEffect": (zone)=>{
                    zone.setAttribute('data-droppable', 'true');
                    zone.setAttribute('data-type', 'container');
                }
            }["MainScreen.useEffect"]);
            const endTime = performance.now(); // End time measurement
            console.log(`⚡ Expensive operation took ${endTime - startTime}ms`);
        }
    }["MainScreen.useEffect"], [
        isCheckoutEditing
    ]);
    // Add this useEffect to monitor state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainScreen.useEffect": ()=>{
            const itemsStatus = items.map({
                "MainScreen.useEffect.itemsStatus": (item)=>({
                        id: item.id,
                        isDropped: item.isDropped
                    })
            }["MainScreen.useEffect.itemsStatus"]);
            console.log('Items status:', itemsStatus);
            console.log('Dropped items:', droppedItems);
        }
    }["MainScreen.useEffect"], [
        items,
        droppedItems
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainScreen.useEffect": ()=>{
            console.log("🔵 Drop zones mounted:", document.querySelectorAll("[data-droppable]"));
            setTimeout({
                "MainScreen.useEffect": ()=>{
                    const dropZones = document.querySelectorAll("[data-droppable]");
                    console.log("✅ Drop zones found in DOM:", dropZones);
                    dropZones.forEach({
                        "MainScreen.useEffect": (zone)=>{
                            console.log("📍 Drop Zone Element:", zone);
                            console.log("👉 Attributes:", zone.attributes);
                            console.log("📏 Bounding Rect:", zone.getBoundingClientRect());
                        }
                    }["MainScreen.useEffect"]);
                }
            }["MainScreen.useEffect"], 500); // Delay ensures elements are fully rendered
        }
    }["MainScreen.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainScreen.useEffect": ()=>{
            console.log("🔄 Drop zones reloaded. Current drop zones:", document.querySelectorAll("[data-droppable]"));
        }
    }["MainScreen.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainScreen.useEffect": ()=>{
            document.querySelectorAll("[data-droppable]").forEach({
                "MainScreen.useEffect": (el)=>console.log("🔍 Found Drop Zone ID:", el.id)
            }["MainScreen.useEffect"]);
        }
    }["MainScreen.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainScreen.useEffect": ()=>{
            document.querySelectorAll("[data-droppable]").forEach({
                "MainScreen.useEffect": (el)=>console.log("✅ Drop Zone Element ID:", el.id)
            }["MainScreen.useEffect"]);
        }
    }["MainScreen.useEffect"], []);
    const [, setRender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainScreen.useEffect": ()=>{
            setTimeout({
                "MainScreen.useEffect": ()=>{
                    console.log("✅ Forcing a re-render to ensure drop zones exist.");
                    setRender({
                        "MainScreen.useEffect": (prev)=>!prev
                    }["MainScreen.useEffect"]); // Toggle state to trigger re-render
                }
            }["MainScreen.useEffect"], 100);
        }
    }["MainScreen.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainScreen.useEffect": ()=>{
            console.log("🛠️ isCheckoutEditing changed:", isCheckoutEditing);
        }
    }["MainScreen.useEffect"], [
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainScreen.useEffect": ()=>{
            if (selectedProfile) {
                handleProfileChange(selectedProfile); // ✅ Load saved checkout items when profile changes
            }
        }
    }["MainScreen.useEffect"], [
        selectedProfile
    ]);
    console.log("Rendering MainScreen:");
    console.log("showToTestList:", showToTestList);
    console.log("showThreeDModelWindow:", showThreeDModelWindow);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainScreen,
        children: [
            !isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].retractExpandSidebarButton,
                onClick: toggleSidebar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBars"], {}, void 0, false, {
                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                    lineNumber: 1120,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                lineNumber: 1116,
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
                                lineNumber: 1126,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toggleButton,
                                onClick: toggleSidebar,
                                children: "☰"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                lineNumber: 1127,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                        lineNumber: 1125,
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
                                lineNumber: 1132,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuItem,
                                onClick: ()=>{
                                    console.log("🚀 Menu item clicked: Tests to Conduct");
                                    openToTestList();
                                    // Force a state check after a short delay
                                    setTimeout(()=>{
                                        console.log("🔍 showToTestList after menu click:", showToTestList);
                                    }, 100);
                                },
                                children: "Tests to Conduct"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                lineNumber: 1135,
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
                                            lineNumber: 1150,
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
                                                    lineNumber: 1157,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addProfileButton,
                                                    onClick: addProfile,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlus"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                        lineNumber: 1167,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1163,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1156,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 1149,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                lineNumber: 1148,
                                columnNumber: 9
                            }, this),
                            isProfileDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileDropdown,
                                children: profiles.map((profile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileSidebarItem,
                                        onClick: ()=>{
                                            handleProfileChange(profile.name); // ✅ Ensure checkout items load per profile
                                        },
                                        children: profile.name
                                    }, profile.id || profile.name, false, {
                                        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                        lineNumber: 1175,
                                        columnNumber: 13
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                lineNumber: 1173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                        lineNumber: 1131,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsButton,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCog"], {}, void 0, false, {
                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                lineNumber: 1191,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1190,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                        lineNumber: 1189,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                lineNumber: 1124,
                columnNumber: 5
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
                                    lineNumber: 1200,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteButton,
                                    onClick: ()=>deleteProfile(selectedProfile),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTrash"], {}, void 0, false, {
                                        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                        lineNumber: 1205,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 1201,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1199,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutButton,
                            onClick: toggleAbout,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInfoCircle"], {}, void 0, false, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 1211,
                                    columnNumber: 13
                                }, this),
                                " About/Specifications"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1210,
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
                                                    lineNumber: 1228,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>editor?.chain().focus().toggleOrderedList().run(),
                                                    children: "Ordered List"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1231,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1227,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EditorContent"], {
                                            editor: editor,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].richTextEditor
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1236,
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
                                                            lineNumber: 1243,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].removeImageButton,
                                                            onClick: ()=>removeImage(index),
                                                            children: "✖"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                            lineNumber: 1249,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1242,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1240,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imagePlaceholder,
                                            children: "No images uploaded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1259,
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
                                                    lineNumber: 1264,
                                                    columnNumber: 21
                                                }, this),
                                                selectedProfile && profileData[selectedProfile]?.uploadedFileName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Uploaded: ",
                                                        profileData[selectedProfile].uploadedFileName
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1273,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1263,
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
                                            lineNumber: 1280,
                                            columnNumber: 19
                                        }, this),
                                        profileData[selectedProfile]?.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageContainer,
                                            children: selectedProfile && profileData[selectedProfile]?.images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: image.src,
                                                        alt: image.alt,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadedImage,
                                                        onError: (e)=>e.currentTarget.src = "/fallback-image.png"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                        lineNumber: 1290,
                                                        columnNumber: 27
                                                    }, this)
                                                }, index, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1289,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1287,
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
                                                            lineNumber: 1311,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Save as .TXT"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1307,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>saveToFile("docx"),
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].downloadButton,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaDownload"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                            lineNumber: 1317,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Save as .DOCX"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1313,
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
                                                            lineNumber: 1327,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Save"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1323,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: cancelEditing,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimes"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                            lineNumber: 1333,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Cancel"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1329,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editButton,
                                            onClick: startEditing,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEdit"], {}, void 0, false, {
                                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                lineNumber: 1338,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1337,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 1304,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1216,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].testTypeHeader,
                            children: "Test Type"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1346,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkoutButton,
                            onClick: toggleCheckout,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWrench"], {}, void 0, false, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 1348,
                                    columnNumber: 17
                                }, this),
                                " Checkout"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1347,
                            columnNumber: 15
                        }, this),
                        showCheckout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            lineNumber: 1363,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editButton,
                                            onClick: toggleCheckoutEditMode,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEdit"], {}, void 0, false, {
                                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                lineNumber: 1365,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1364,
                                            columnNumber: 19
                                        }, this),
                                        !isCheckoutEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].startTestButton,
                                            style: {
                                                marginLeft: 'auto'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlay"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1370,
                                                    columnNumber: 23
                                                }, this),
                                                " Start Test"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1369,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 1362,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DndContext"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                droppedItems.length === 0 && isCheckoutEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    lineNumber: 1402,
                                                    columnNumber: 7
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SortableContext"], {
                                                    items: droppedItems,
                                                    strategy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verticalListSortingStrategy"],
                                                    children: droppedItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].droppableBox,
                                                            style: {
                                                                position: 'relative',
                                                                overflow: 'visible'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$DraggableBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                                                lineNumber: 1416,
                                                                columnNumber: 7
                                                            }, this)
                                                        }, `top-${item.id}`, false, {
                                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                            lineNumber: 1415,
                                                            columnNumber: 5
                                                        }, this))
                                                }, sortableKey, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1413,
                                                    columnNumber: 1
                                                }, this)
                                            ]
                                        }, "top-section", true, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1389,
                                            columnNumber: 3
                                        }, this),
                                        isCheckoutEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    children: "Available Components"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1455,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SortableContext"], {
                                                    items: items,
                                                    strategy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verticalListSortingStrategy"],
                                                    children: items.map((item)=>{
                                                        const isInTopSection = droppedItems.some((droppedItem)=>droppedItem.id === item.id);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dragItem,
                                                            "data-draggable-id": item.id,
                                                            "data-dropped": isInTopSection ? "true" : "false",
                                                            style: {
                                                                opacity: isInTopSection ? 0.3 : 1,
                                                                pointerEvents: isInTopSection ? 'none' : 'auto',
                                                                cursor: isInTopSection ? 'not-allowed' : 'grab'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$DraggableBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                                                lineNumber: 1472,
                                                                columnNumber: 7
                                                            }, this)
                                                        }, `bottom-${item.id}`, false, {
                                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                            lineNumber: 1461,
                                                            columnNumber: 5
                                                        }, this);
                                                    })
                                                }, sortableKey, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1456,
                                                    columnNumber: 3
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1432,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragOverlay"], {
                                            children: activeId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$DraggableBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                id: activeId,
                                                header: (items.find((item)=>item.id === activeId) || droppedItems.find((item)=>item.id === activeId))?.header || "",
                                                options: (items.find((item)=>item.id === activeId) || droppedItems.find((item)=>item.id === activeId))?.options || [],
                                                data: {
                                                    type: "draggable-item"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                lineNumber: 1489,
                                                columnNumber: 5
                                            }, this) : null
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1487,
                                            columnNumber: 1
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 1375,
                                    columnNumber: 17
                                }, this),
                                isCheckoutEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editModeButtons,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].saveButton,
                                            onClick: ()=>{
                                                handleSaveCheckout();
                                                toggleCheckoutEditMode(); // ✅ Exit edit mode after saving
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheck"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1506,
                                                    columnNumber: 21
                                                }, this),
                                                " Save"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1502,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                                            onClick: ()=>{
                                                handleCancelCheckout();
                                                toggleCheckoutEditMode(); // ✅ Exit edit mode after canceling
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimes"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                                    lineNumber: 1512,
                                                    columnNumber: 21
                                                }, this),
                                                " Cancel"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                            lineNumber: 1508,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 1501,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1353,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ThreeDModelViewerHeader,
                            children: "Satellite Model Viewer"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1518,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].threeDModelButton,
                            onClick: (e)=>{
                                e.preventDefault();
                                console.log("🔘 3D Model button clicked");
                                const profile = profiles.find((p)=>p.name === selectedProfile);
                                const profileId = profile?.id || 1;
                                console.log(`📱 Opening 3D Model window for profile ID: ${profileId}`);
                                openModelWindow(profileId);
                                // Add debug timeout to check state
                                setTimeout(()=>{
                                    console.log("🔍 After 3D Model button click:");
                                    console.log("- showThreeDModelWindow:", showThreeDModelWindow);
                                    console.log("- threeDModelProfileId:", threeDModelProfileId);
                                }, 100);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCube"], {}, void 0, false, {
                                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                                    lineNumber: 1538,
                                    columnNumber: 3
                                }, this),
                                " 3D Model"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1520,
                            columnNumber: 1
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                    lineNumber: 1198,
                    columnNumber: 9
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profilePage,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileHeading,
                            children: "Satellite Automated Testing System"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1544,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileSubtext,
                            children: "Navigate using the side panel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                            lineNumber: 1545,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                    lineNumber: 1543,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
                lineNumber: 1196,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MainScreen/MainScreen.tsx",
        lineNumber: 1114,
        columnNumber: 3
    }, this);
};
_s(MainScreen, "f+/KdwFERsZSGhq2mzLMEYP2Axo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDndContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDroppable"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDroppable"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensors"]
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-draggable/build/cjs/cjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
// Storage key for position
const POSITION_STORAGE_KEY = "toTestList_position";
const ToTestList = ({ zIndex, onMouseDown, onClose, bringWindowToFront, windowZIndexes, zIndexCounter })=>{
    _s();
    const nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        test: "",
        satellite: "",
        loggedBy: ""
    });
    // Get saved position or use default centered position
    const getInitialPosition = ()=>{
        try {
            const savedPosition = localStorage.getItem(POSITION_STORAGE_KEY);
            if (savedPosition) {
                return JSON.parse(savedPosition);
            }
        } catch (e) {
            console.error("Error parsing saved position:", e);
        }
        return {
            x: Math.max(0, (window.innerWidth - 800) / 2),
            y: Math.max(0, (window.innerHeight - 500) / 2)
        };
    };
    // Use state for position WITH saved state
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getInitialPosition);
    // Get effective z-index
    const effectiveZIndex = windowZIndexes["ToTestList"] || zIndex;
    // Initialize once on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToTestList.useEffect": ()=>{
            console.log(`🔵 ToTestList mounted with z-index: ${effectiveZIndex}`);
            // Load saved data
            const savedRows = localStorage.getItem("toTestListRows");
            if (savedRows) {
                try {
                    setRows(JSON.parse(savedRows));
                } catch (e) {
                    console.error("Error parsing saved rows:", e);
                }
            }
            // Focus this window when it opens
            setTimeout({
                "ToTestList.useEffect": ()=>{
                    bringWindowToFront("ToTestList");
                }
            }["ToTestList.useEffect"], 0);
            return ({
                "ToTestList.useEffect": ()=>{
                    console.log("🔴 ToTestList unmounted");
                }
            })["ToTestList.useEffect"];
        }
    }["ToTestList.useEffect"], []);
    // Save data when rows change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToTestList.useEffect": ()=>{
            if (rows.length > 0) {
                localStorage.setItem("toTestListRows", JSON.stringify(rows));
            } else {
                localStorage.removeItem("toTestListRows");
            }
        }
    }["ToTestList.useEffect"], [
        rows
    ]);
    // Save position when it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToTestList.useEffect": ()=>{
            localStorage.setItem(POSITION_STORAGE_KEY, JSON.stringify(position));
        }
    }["ToTestList.useEffect"], [
        position
    ]);
    // Track dark mode
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(document.documentElement.classList.contains("dark"));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToTestList.useEffect": ()=>{
            const checkDarkMode = {
                "ToTestList.useEffect.checkDarkMode": ()=>{
                    setIsDarkMode(document.documentElement.classList.contains("dark"));
                }
            }["ToTestList.useEffect.checkDarkMode"];
            // Set up theme observer
            const observer = new MutationObserver({
                "ToTestList.useEffect": (mutations)=>{
                    mutations.forEach({
                        "ToTestList.useEffect": (mutation)=>{
                            if (mutation.attributeName === "class") {
                                checkDarkMode();
                            }
                        }
                    }["ToTestList.useEffect"]);
                }
            }["ToTestList.useEffect"]);
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    "class"
                ]
            });
            return ({
                "ToTestList.useEffect": ()=>observer.disconnect()
            })["ToTestList.useEffect"];
        }
    }["ToTestList.useEffect"], []);
    // CRUD operations
    const addItem = ()=>{
        if (!form.test || !form.satellite) return;
        const newRow = {
            sn: rows.length + 1,
            test: form.test,
            satellite: form.satellite,
            dateTime: new Date().toLocaleString(),
            loggedBy: form.loggedBy || "Anonymous"
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
        if (selectedIndex === -1) return;
        const updatedRows = rows.filter((_, index)=>index !== selectedIndex).map((row, index)=>({
                ...row,
                sn: index + 1
            }));
        setRows(updatedRows);
    };
    const clearList = ()=>{
        if (window.confirm("Are you sure you want to clear all items?")) {
            setRows([]);
        }
    };
    const toggleRowSelection = (index)=>{
        setRows(rows.map((row, i)=>({
                ...row,
                selected: i === index ? !row.selected : false
            })));
    };
    // Handle window focus
    const handleWindowClick = (e)=>{
        e.stopPropagation();
        onMouseDown();
    };
    // Handle drag stop - save position
    const handleDragStop = (e, data)=>{
        console.log(`📌 ToTestList moved to: x=${data.x}, y=${data.y}`);
        // Ensure we're not causing a render loop by checking if position actually changed
        if (position.x !== data.x || position.y !== data.y) {
            setPosition({
                x: data.x,
                y: data.y
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        nodeRef: nodeRef,
        handle: ".drag-handle",
        position: position,
        onStart: ()=>{
            // Bring to front when starting to drag
            onMouseDown();
        },
        onStop: handleDragStop,
        bounds: "body",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: nodeRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].popup,
            style: {
                position: "fixed",
                zIndex: effectiveZIndex,
                backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                color: isDarkMode ? "#fff" : "#000",
                boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                width: "800px",
                maxHeight: "80vh",
                overflowY: "auto",
                userSelect: "none"
            },
            onClick: handleWindowClick,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header} drag-handle`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Tests to Conduct"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                onClose();
                            },
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                            style: {
                                color: isDarkMode ? "white" : "black"
                            },
                            children: "✖"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                    lineNumber: 198,
                    columnNumber: 9
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
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Test"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Satellite"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Date/Time Logged"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Logged by"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 5,
                                    style: {
                                        textAlign: "center",
                                        padding: "20px"
                                    },
                                    children: "No items added yet. Add a test below."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                    lineNumber: 225,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this) : rows.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: {
                                        backgroundColor: row.selected ? isDarkMode ? "#003366" : "#d0ebff" : "transparent"
                                    },
                                    className: row.selected ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectedRow : "",
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        toggleRowSelection(index);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: row.sn
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                            lineNumber: 246,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: row.test
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                            lineNumber: 247,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: row.satellite
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                            lineNumber: 248,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: row.dateTime
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                            lineNumber: 249,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: row.loggedBy
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                            lineNumber: 250,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                    lineNumber: 231,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                    lineNumber: 212,
                    columnNumber: 9
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
                                }),
                            onClick: (e)=>e.stopPropagation()
                        }, void 0, false, {
                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Satellite",
                            value: form.satellite,
                            onChange: (e)=>setForm({
                                    ...form,
                                    satellite: e.target.value
                                }),
                            onClick: (e)=>e.stopPropagation()
                        }, void 0, false, {
                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Logged by",
                            value: form.loggedBy,
                            onChange: (e)=>setForm({
                                    ...form,
                                    loggedBy: e.target.value
                                }),
                            onClick: (e)=>e.stopPropagation()
                        }, void 0, false, {
                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                addItem();
                            },
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addButton,
                            children: "+"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                    lineNumber: 257,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                deleteItem();
                            },
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteButton,
                            disabled: !rows.some((row)=>row.selected),
                            children: "Delete Item"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                clearList();
                            },
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].clearButton,
                            disabled: rows.length === 0,
                            children: "Clear List"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                    lineNumber: 290,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
            lineNumber: 182,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this), document.body);
};
_s(ToTestList, "2tEFwdyBid1wVFU9SV8NYNk1ktg=");
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
  "drag-handle": "ServerWindow-module__wfqmlq__drag-handle",
  "form": "ServerWindow-module__wfqmlq__form",
  "header": "ServerWindow-module__wfqmlq__header",
  "input": "ServerWindow-module__wfqmlq__input",
  "logWindow": "ServerWindow-module__wfqmlq__logWindow",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$rnd$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-rnd/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$SYFQ2XB5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-router/dist/development/chunk-SYFQ2XB5.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
// Storage key for position
const POSITION_STORAGE_KEY = "serverWindow_position";
const ServerWindow = ({ zIndex, onMouseDown, onClose, bringWindowToFront, windowZIndexes, zIndexCounter })=>{
    _s();
    const [serverAddress, setServerAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [serverId, setServerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Disconnected");
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const logsEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$SYFQ2XB5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    const backendUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";
    const windowName = "ServerWindow";
    // Get saved position or use default centered position
    const getInitialPosition = ()=>{
        try {
            const savedPosition = localStorage.getItem(POSITION_STORAGE_KEY);
            if (savedPosition) {
                return JSON.parse(savedPosition);
            }
        } catch (e) {
            console.error("Error parsing saved position:", e);
        }
        return {
            x: Math.max(0, (window.innerWidth - 600) / 2),
            y: Math.max(0, (window.innerHeight - 400) / 2)
        };
    };
    // Use state for position WITH saved state
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getInitialPosition);
    // Save position when it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServerWindow.useEffect": ()=>{
            localStorage.setItem(POSITION_STORAGE_KEY, JSON.stringify(position));
        }
    }["ServerWindow.useEffect"], [
        position
    ]);
    // Scrolls logs to bottom when they update
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
    // Focus window on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServerWindow.useEffect": ()=>{
            console.log("🔵 ServerWindow mounted");
            // Focus this window when it opens
            setTimeout({
                "ServerWindow.useEffect": ()=>{
                    bringWindowToFront("ServerWindow");
                }
            }["ServerWindow.useEffect"], 0);
            return ({
                "ServerWindow.useEffect": ()=>{
                    console.log("🔴 ServerWindow unmounted");
                }
            })["ServerWindow.useEffect"];
        }
    }["ServerWindow.useEffect"], []);
    const [currentZIndex, setCurrentZIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(zIndex);
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
    // When the window is clicked, bring it to front
    const handleWindowClick = (e)=>{
        e.stopPropagation();
        onMouseDown();
    };
    const handleConnect = async ()=>{
        if (!serverAddress || !serverId) {
            alert("Please provide both Server Address and Server ID.");
            return;
        }
        try {
            setStatus("Connecting...");
            appendLog("Attempting to connect to MCC server...");
            console.log("Connecting to:", `${backendUrl}/connect_mcc`);
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
                setTimeout(()=>{
                    navigate("/main");
                }, 100);
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
    // Get dark mode status
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(document.documentElement.classList.contains("dark"));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServerWindow.useEffect": ()=>{
            const checkDarkMode = {
                "ServerWindow.useEffect.checkDarkMode": ()=>{
                    setIsDarkMode(document.documentElement.classList.contains("dark"));
                }
            }["ServerWindow.useEffect.checkDarkMode"];
            // Initial check
            checkDarkMode();
            // Set up observer for theme changes
            const observer = new MutationObserver({
                "ServerWindow.useEffect": (mutations)=>{
                    mutations.forEach({
                        "ServerWindow.useEffect": (mutation)=>{
                            if (mutation.attributeName === "class") {
                                checkDarkMode();
                            }
                        }
                    }["ServerWindow.useEffect"]);
                }
            }["ServerWindow.useEffect"]);
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    "class"
                ]
            });
            return ({
                "ServerWindow.useEffect": ()=>observer.disconnect()
            })["ServerWindow.useEffect"];
        }
    }["ServerWindow.useEffect"], []);
    // Get the effective z-index value
    const effectiveZIndex = windowZIndexes["ServerWindow"] || zIndex;
    // Handle position change
    const handleDragStop = (e, d)=>{
        console.log(`📌 ServerWindow moved to: x=${d.x}, y=${d.y}`);
        // Only update if position actually changed to prevent update loops
        if (position.x !== d.x || position.y !== d.y) {
            setPosition({
                x: d.x,
                y: d.y
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$rnd$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rnd"], {
        position: position,
        size: {
            width: 500,
            height: "auto"
        },
        dragHandleClassName: "drag-handle",
        enableResizing: false,
        onDragStart: ()=>{
            onMouseDown();
        },
        onDragStop: (e, d)=>{
            handleDragStop(e, d);
        },
        bounds: "body",
        style: {
            position: "fixed",
            zIndex: effectiveZIndex,
            pointerEvents: "auto",
            backgroundColor: isDarkMode ? "#121212" : "white",
            borderRadius: "10px",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
            willChange: "transform"
        },
        onClick: handleWindowClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].popup,
            style: {
                backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                color: isDarkMode ? "#fff" : "#000"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header} drag-handle`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Server Connection"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                onClose();
                            },
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                            style: {
                                color: isDarkMode ? "white" : "black"
                            },
                            children: "✖"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Server Address",
                            value: serverAddress,
                            onChange: (e)=>setServerAddress(e.target.value),
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                            onClick: (e)=>e.stopPropagation()
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Server ID",
                            value: serverId,
                            onChange: (e)=>setServerId(e.target.value),
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                            onClick: (e)=>e.stopPropagation()
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                handleConnect();
                            },
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].connectButton,
                            children: "Connect"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "Status: ",
                        status
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logs,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Logs"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logWindow,
                            style: {
                                maxHeight: "250px",
                                overflowY: "scroll",
                                border: "1px solid #ccc",
                                padding: "10px",
                                borderRadius: "5px",
                                backgroundColor: isDarkMode ? "#2a2a2a" : "#f5f5f5"
                            },
                            onClick: (e)=>e.stopPropagation(),
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
                                                lineNumber: 276,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: log.message
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                                lineNumber: 286,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                        lineNumber: 275,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: logsEndRef
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                    lineNumber: 260,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
            lineNumber: 210,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this), document.body);
};
_s(ServerWindow, "QbjAO9xu+NzG9ghBNOH3z15lJ4E=", false, function() {
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
"[project]/src/components/ModelWindow/ThreeDModelWindow.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-draggable/build/cjs/cjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/ModelWindow/ThreeDModelWindow.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$2895749c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useLoader$3e$__ = __turbopack_import__("[project]/node_modules/@react-three/fiber/dist/events-2895749c.esm.js [app-client] (ecmascript) <export F as useLoader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$2895749c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__ = __turbopack_import__("[project]/node_modules/@react-three/fiber/dist/events-2895749c.esm.js [app-client] (ecmascript) <export C as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
;
// Storage key for position
const POSITION_STORAGE_KEY = "threeDModelWindow_position";
const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";
const SatelliteModel = ({ modelPath, scale = 40, position = [
    0,
    0,
    0
], onColorExtracted })=>{
    _s();
    if (!modelPath) {
        console.warn("⚠️ No model path provided, showing fallback.");
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "error-message",
            children: "⚠️ No model path provided"
        }, void 0, false, {
            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
            lineNumber: 38,
            columnNumber: 12
        }, this);
    }
    console.log(`🔍 Attempting to load GLTF model from: ${modelPath}`);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gltf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$2895749c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useLoader$3e$__["useLoader"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLTFLoader"], modelPath);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SatelliteModel.useEffect": ()=>{
            if (gltf.scene && onColorExtracted) {
                const firstMesh = gltf.scene.children.find({
                    "SatelliteModel.useEffect.firstMesh": (obj)=>obj instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Mesh
                }["SatelliteModel.useEffect.firstMesh"]);
                if (firstMesh && firstMesh.material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.MeshStandardMaterial) {
                    const color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Color(firstMesh.material.color.getHex());
                    onColorExtracted(color);
                }
            }
        }
    }["SatelliteModel.useEffect"], [
        gltf,
        onColorExtracted
    ]);
    // Rotate model slightly over time
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$2895749c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"])({
        "SatelliteModel.useFrame": ()=>{
            if (ref.current) {
                ref.current.rotation.y += 0.003;
            }
        }
    }["SatelliteModel.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
        ref: ref,
        object: gltf.scene,
        position: position,
        scale: hovered ? scale * 1.2 : scale,
        onPointerOver: ()=>setHovered(true),
        onPointerOut: ()=>setHovered(false)
    }, void 0, false, {
        fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
};
_s(SatelliteModel, "dHmgWeA0o/fYbJ6TqknJE64gSoM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$2895749c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useLoader$3e$__["useLoader"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$2895749c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useFrame$3e$__["useFrame"]
    ];
});
_c = SatelliteModel;
const ThreeDModelWindow = ({ profileId, zIndex, onMouseDown, onClose, bringWindowToFront, windowZIndexes, zIndexCounter, showThreeDModelWindow })=>{
    _s1();
    // Core state
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modelPath, setModelPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [canvasBgColor, setCanvasBgColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#ffffff");
    const [modelLoading, setModelLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [modelError, setModelError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadStatus, setUploadStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // DOM refs - use non-null assertion for Draggable compatibility
    const nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get saved position or use default centered position
    const getInitialPosition = ()=>{
        try {
            const savedPosition = localStorage.getItem(POSITION_STORAGE_KEY);
            if (savedPosition) {
                return JSON.parse(savedPosition);
            }
        } catch (e) {
            console.error("Error parsing saved position:", e);
        }
        return {
            x: Math.max(0, (window.innerWidth - 600) / 2),
            y: Math.max(0, (window.innerHeight - 600) / 2)
        };
    };
    // Use state for position WITH saved state
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getInitialPosition);
    // Save position when it changes - but only when it actually changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeDModelWindow.useEffect": ()=>{
            localStorage.setItem(POSITION_STORAGE_KEY, JSON.stringify(position));
        }
    }["ThreeDModelWindow.useEffect"], [
        position
    ]);
    // Get effective z-index
    const effectiveZIndex = windowZIndexes["ThreeDModelWindow"] || zIndex;
    // Load model data on mount and when profileId changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeDModelWindow.useEffect": ()=>{
            if (!profileId || !showThreeDModelWindow) return;
            console.log(`🌐 ThreeDModelWindow: Loading model for profile ${profileId}`);
            setModelLoading(true);
            setModelError(null);
            const fetchModelData = {
                "ThreeDModelWindow.useEffect.fetchModelData": async ()=>{
                    try {
                        const backendUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";
                        const response = await fetch(`${backendUrl}/api/profile/${profileId}`);
                        if (!response.ok) {
                            throw new Error(`Failed to fetch model data: ${response.status}`);
                        }
                        const data = await response.json();
                        console.log(`📥 Received model data:`, data);
                        if (data.model_path) {
                            setModelPath(data.model_path);
                        } else {
                            setModelError("No 3D model available for this profile");
                        }
                    } catch (error) {
                        console.error("Error fetching model:", error);
                        setModelError(error instanceof Error ? error.message : "Failed to load model");
                    } finally{
                        setModelLoading(false);
                    }
                }
            }["ThreeDModelWindow.useEffect.fetchModelData"];
            fetchModelData();
            // Focus window when it opens - use timeout to ensure it's after state updates
            setTimeout({
                "ThreeDModelWindow.useEffect": ()=>{
                    bringWindowToFront("ThreeDModelWindow");
                }
            }["ThreeDModelWindow.useEffect"], 0);
        }
    }["ThreeDModelWindow.useEffect"], [
        profileId,
        showThreeDModelWindow,
        bringWindowToFront
    ]);
    // Check dark mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeDModelWindow.useEffect": ()=>{
            const checkDarkMode = {
                "ThreeDModelWindow.useEffect.checkDarkMode": ()=>{
                    setIsDarkMode(document.documentElement.classList.contains("dark"));
                }
            }["ThreeDModelWindow.useEffect.checkDarkMode"];
            // Initial check
            checkDarkMode();
            // Set up observer for theme changes
            const observer = new MutationObserver({
                "ThreeDModelWindow.useEffect": (mutations)=>{
                    for (const mutation of mutations){
                        if (mutation.attributeName === "class") {
                            checkDarkMode();
                            break;
                        }
                    }
                }
            }["ThreeDModelWindow.useEffect"]);
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    "class"
                ]
            });
            return ({
                "ThreeDModelWindow.useEffect": ()=>observer.disconnect()
            })["ThreeDModelWindow.useEffect"];
        }
    }["ThreeDModelWindow.useEffect"], []);
    // Handle file upload
    const handleFileUpload = async ()=>{
        if (!selectedFile) return;
        // Check if file is a .glb model
        if (!selectedFile.name.endsWith('.glb')) {
            setUploadStatus('Error: Only .glb files are supported.');
            return;
        }
        setModelLoading(true);
        setUploadStatus('Uploading model...');
        // Create FormData for the upload
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('profile_id', profileId.toString());
        try {
            const backendUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";
            const response = await fetch(`${backendUrl}/api/upload-glb`, {
                method: 'POST',
                body: formData
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to upload model');
            }
            const result = await response.json();
            setModelPath(result.model_path);
            setUploadStatus('Model uploaded successfully!');
            setModelError(null);
            setSelectedFile(null);
            // Clear file input
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
            // Auto-hide success message
            setTimeout(()=>{
                setUploadStatus(null);
            }, 3000);
        } catch (error) {
            console.error('Error uploading model:', error);
            setUploadStatus(`Error: ${error instanceof Error ? error.message : 'Failed to upload model'}`);
            setModelError(error instanceof Error ? error.message : 'Failed to upload model');
        } finally{
            setModelLoading(false);
        }
    };
    // Handle window click (bring to front)
    const handleWindowClick = (e)=>{
        e.stopPropagation();
        onMouseDown();
    };
    // Handle drag stop - safely update position
    const handleDragStop = (e, data)=>{
        console.log(`📌 ThreeDModelWindow moved to: x=${data.x}, y=${data.y}`);
        // Only update if position actually changed to prevent render loops
        if (position.x !== data.x || position.y !== data.y) {
            setPosition({
                x: data.x,
                y: data.y
            });
        }
    };
    // Debug & logging
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeDModelWindow.useEffect": ()=>{
            console.log(`🔵 ThreeDModelWindow mounted (visible: ${showThreeDModelWindow})`);
            return ({
                "ThreeDModelWindow.useEffect": ()=>{
                    console.log("🔴 ThreeDModelWindow unmounted");
                }
            })["ThreeDModelWindow.useEffect"];
        }
    }["ThreeDModelWindow.useEffect"], []);
    // Render nothing if window should be hidden
    if (!showThreeDModelWindow) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        nodeRef: nodeRef,
        handle: ".drag-handle",
        position: position,
        onStart: ()=>{
            onMouseDown();
        },
        onStop: handleDragStop,
        bounds: "body",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: nodeRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].popup,
            style: {
                position: "fixed",
                zIndex: effectiveZIndex,
                backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                color: isDarkMode ? "#fff" : "#000",
                width: "600px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.24)"
            },
            onClick: handleWindowClick,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header} drag-handle`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Satellite Model Viewer"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                onClose();
                            },
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                            style: {
                                color: isDarkMode ? "white" : "black"
                            },
                            children: "✖"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                            lineNumber: 307,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                    lineNumber: 305,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                    children: [
                        uploadStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                margin: "10px 0",
                                padding: "10px",
                                borderRadius: "4px",
                                backgroundColor: uploadStatus.includes('Error') ? isDarkMode ? "#3d0000" : "#ffdddd" : isDarkMode ? "#004d00" : "#ddffdd",
                                color: uploadStatus.includes('Error') ? isDarkMode ? "#ff8080" : "#d00000" : isDarkMode ? "#80ff80" : "#00b000"
                            },
                            children: uploadStatus
                        }, void 0, false, {
                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                height: "400px",
                                marginBottom: "20px",
                                borderRadius: "4px",
                                overflow: "hidden",
                                border: `1px solid ${isDarkMode ? "#333" : "#ddd"}`
                            },
                            children: modelLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    height: "100%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: isDarkMode ? "#111" : "#f5f5f5"
                                },
                                children: "Loading 3D model..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                lineNumber: 346,
                                columnNumber: 15
                            }, this) : modelError || errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    height: "100%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: isDarkMode ? "#111" : "#f5f5f5",
                                    color: "#e74c3c",
                                    padding: "20px",
                                    textAlign: "center"
                                },
                                children: modelError || errorMessage
                            }, void 0, false, {
                                fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                lineNumber: 356,
                                columnNumber: 15
                            }, this) : modelPath ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorBoundary, {
                                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "20px",
                                        color: "red"
                                    },
                                    children: "Error loading 3D model"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                    lineNumber: 370,
                                    columnNumber: 17
                                }, void 0),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            height: "100%",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        },
                                        children: "Loading model..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                        lineNumber: 375,
                                        columnNumber: 19
                                    }, void 0),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
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
                                            height: "100%",
                                            backgroundColor: canvasBgColor
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                                                intensity: 0.8
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                                lineNumber: 388,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                                                position: [
                                                    10,
                                                    10,
                                                    10
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                                lineNumber: 389,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SatelliteModel, {
                                                modelPath: modelPath,
                                                onColorExtracted: (color)=>setCanvasBgColor(color.getStyle())
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                                lineNumber: 390,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {}, void 0, false, {
                                                fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                                lineNumber: 394,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                        lineNumber: 384,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                    lineNumber: 374,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                lineNumber: 369,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    height: "100%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: isDarkMode ? "#111" : "#f5f5f5",
                                    flexDirection: "column",
                                    gap: "10px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "No 3D model available"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                        lineNumber: 408,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "14px",
                                            opacity: 0.7
                                        },
                                        children: "Upload a .glb file below"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                        lineNumber: 409,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                lineNumber: 399,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                padding: "10px",
                                backgroundColor: isDarkMode ? "#111" : "#f5f5f5",
                                borderRadius: "4px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: 0,
                                        fontSize: "14px"
                                    },
                                    children: [
                                        "Upload 3D Model (Accepts ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: ".glb"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                            lineNumber: 424,
                                            columnNumber: 40
                                        }, this),
                                        " files)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                    lineNumber: 423,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: ".glb",
                                            ref: fileInputRef,
                                            onChange: (event)=>{
                                                if (event.target.files && event.target.files.length > 0) {
                                                    setSelectedFile(event.target.files[0]);
                                                }
                                            },
                                            style: {
                                                flex: 1
                                            },
                                            onClick: (e)=>e.stopPropagation()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                            lineNumber: 428,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                handleFileUpload();
                                            },
                                            disabled: !selectedFile,
                                            style: {
                                                padding: "8px 16px",
                                                backgroundColor: selectedFile ? "#4caf50" : "#ccc",
                                                color: "white",
                                                border: "none",
                                                borderRadius: "4px",
                                                cursor: selectedFile ? "pointer" : "not-allowed"
                                            },
                                            children: "Upload"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                            lineNumber: 441,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                                    lineNumber: 427,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                            lineNumber: 415,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
                    lineNumber: 319,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
            lineNumber: 292,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.tsx",
        lineNumber: 282,
        columnNumber: 5
    }, this), document.body);
};
_s1(ThreeDModelWindow, "Gk86dLGTYLRSyGkARP083uqgPO0=");
_c1 = ThreeDModelWindow;
// Error boundary component for Canvas
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component {
    state = {
        hasError: false
    };
    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }
    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}
const __TURBOPACK__default__export__ = ThreeDModelWindow;
var _c, _c1;
__turbopack_refresh__.register(_c, "SatelliteModel");
__turbopack_refresh__.register(_c1, "ThreeDModelWindow");
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
  "welcomeHeader": "WelcomeWindow-module__WdKywW__welcomeHeader",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-draggable/build/cjs/cjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/WelcomeWindow/WelcomeWindow.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$SYFQ2XB5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-router/dist/development/chunk-SYFQ2XB5.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
// Use require if not using images.d.ts
//const logo = require("../../assets/logo.jpg");
const WelcomeWindow = ({ openToTestList, openServerWindow })=>{
    _s();
    const [dateTime, setDateTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showToTestList, setShowToTestList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showServerWindow, setShowServerWindow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasTests, setHasTests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Track if there are rows in the list
    const nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$SYFQ2XB5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        nodeRef: nodeRef,
        handle: `.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].welcomeHeader}`,
        positionOffset: {
            x: "-50%",
            y: "-50%"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: nodeRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].welcomeWindow,
            style: {
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                minHeight: "200px",
                background: isDarkMode ? "linear-gradient(135deg, #000000, #1a1a1a)" : "linear-gradient(135deg, #ffffff, #e6f7ff)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].welcomeHeader} drag-handle`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/assets/SaRCLogo.png",
                            alt: "Satellite Research Centre Logo",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo
                        }, void 0, false, {
                            fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                            lineNumber: 99,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Satellite Research Centre"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                            lineNumber: 100,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Satellite Automated Testing System"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                            lineNumber: 101,
                            columnNumber: 9
                        }, this),
                        dateTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dateTime,
                            children: dateTime
                        }, void 0, false, {
                            fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                            lineNumber: 102,
                            columnNumber: 22
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                    lineNumber: 98,
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
                                    lineNumber: 106,
                                    columnNumber: 11
                                }, this),
                                hasTests && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notificationDot
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                                    lineNumber: 112,
                                    columnNumber: 24
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                            lineNumber: 105,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].welcomeButton,
                            onClick: handleServerWindowOpen,
                            children: "MCC"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                            lineNumber: 114,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                    lineNumber: 104,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
};
_s(WelcomeWindow, "GT+fBVLvtr611h/1lrIaKb0Pii8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$SYFQ2XB5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"]
    ];
});
_c = WelcomeWindow;
const __TURBOPACK__default__export__ = WelcomeWindow;
var _c;
__turbopack_refresh__.register(_c, "WelcomeWindow");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/MainScreen/MainScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ToTestList/ToTestList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ServerWindow/ServerWindow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ModelWindow/ThreeDModelWindow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/WelcomeWindow/WelcomeWindow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$SYFQ2XB5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-router/dist/development/chunk-SYFQ2XB5.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
function Page() {
    _s();
    var _s1 = __turbopack_refresh__.signature();
    // Use a single state object for ALL window visibility to avoid race conditions
    const [windowVisibility, setWindowVisibility] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ToTestList: false,
        ServerWindow: false,
        ThreeDModelWindow: false
    });
    const [zIndexCounter, setZIndexCounter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10000); // Base z-index
    const [windowZIndexes, setWindowZIndexes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ToTestList: 10002,
        ServerWindow: 10001,
        ThreeDModelWindow: 10000
    });
    const [threeDModelProfileId, setThreeDModelProfileId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isOnMainScreen, setIsOnMainScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Use refs to track previous state for debugging
    const prevVisibilityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(windowVisibility);
    // Debug state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            // Only log if something actually changed
            if (JSON.stringify(prevVisibilityRef.current) !== JSON.stringify(windowVisibility)) {
                console.log("🔄 Window visibility changed:", {
                    prev: prevVisibilityRef.current,
                    current: windowVisibility
                });
                prevVisibilityRef.current = windowVisibility;
            }
        }
    }["Page.useEffect"], [
        windowVisibility
    ]);
    // Monitor current route to track if we're on main screen
    const RouteObserver = ()=>{
        _s1();
        const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$SYFQ2XB5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "Page.RouteObserver.useEffect": ()=>{
                setIsOnMainScreen(location.pathname === '/main');
            }
        }["Page.RouteObserver.useEffect"], [
            location
        ]);
        return null;
    };
    _s1(RouteObserver, "BXcZrDMM76mmm4zA8/QV5UbMNXE=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$SYFQ2XB5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"]
        ];
    });
    // Main function to bring a window to the front
    const bringWindowToFront = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[bringWindowToFront]": (windowName)=>{
            console.log(`🎯 Bringing ${windowName} to front`);
            // IMMEDIATELY ensure the window is open - don't check current state first
            setWindowVisibility({
                "Page.useCallback[bringWindowToFront]": (prev)=>({
                        ...prev,
                        [windowName]: true
                    })
            }["Page.useCallback[bringWindowToFront]"]);
            // Update z-index values
            setWindowZIndexes({
                "Page.useCallback[bringWindowToFront]": (prevIndexes)=>{
                    const highestZIndex = Math.max(...Object.values(prevIndexes), 10000);
                    if (prevIndexes[windowName] >= highestZIndex) {
                        console.warn(`⚠️ ${windowName} is already at the top. No update needed.`);
                        return prevIndexes;
                    }
                    return {
                        ...prevIndexes,
                        [windowName]: highestZIndex + 1
                    };
                }
            }["Page.useCallback[bringWindowToFront]"]);
            setZIndexCounter({
                "Page.useCallback[bringWindowToFront]": (prevCounter)=>prevCounter + 1
            }["Page.useCallback[bringWindowToFront]"]);
            // Force a double-check after a short delay to ensure window is actually visible
            setTimeout({
                "Page.useCallback[bringWindowToFront]": ()=>{
                    setWindowVisibility({
                        "Page.useCallback[bringWindowToFront]": (prev)=>{
                            if (!prev[windowName]) {
                                console.log(`🚨 Emergency fix: Window ${windowName} wasn't showing. Forcing visibility.`);
                                return {
                                    ...prev,
                                    [windowName]: true
                                };
                            }
                            return prev;
                        }
                    }["Page.useCallback[bringWindowToFront]"]);
                }
            }["Page.useCallback[bringWindowToFront]"], 50);
        }
    }["Page.useCallback[bringWindowToFront]"], []);
    const openToTestList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[openToTestList]": ()=>{
            console.log("🟢 Opening ToTestList window");
            setWindowVisibility({
                "Page.useCallback[openToTestList]": (prev)=>({
                        ...prev,
                        ToTestList: true
                    })
            }["Page.useCallback[openToTestList]"]);
            bringWindowToFront("ToTestList");
            // Verify the window is actually visible after a short delay
            setTimeout({
                "Page.useCallback[openToTestList]": ()=>{
                    console.log("⏱️ ToTestList visibility status:", windowVisibility.ToTestList);
                    if (!windowVisibility.ToTestList) {
                        console.log("⚠️ ToTestList still not showing! Forcing visibility again...");
                        setWindowVisibility({
                            "Page.useCallback[openToTestList]": (prev)=>({
                                    ...prev,
                                    ToTestList: true
                                })
                        }["Page.useCallback[openToTestList]"]);
                    }
                }
            }["Page.useCallback[openToTestList]"], 100);
        }
    }["Page.useCallback[openToTestList]"], [
        bringWindowToFront,
        windowVisibility.ToTestList
    ]);
    const closeToTestList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[closeToTestList]": ()=>{
            console.log("Closing ToTestList window");
            setWindowVisibility({
                "Page.useCallback[closeToTestList]": (prev)=>({
                        ...prev,
                        ToTestList: false
                    })
            }["Page.useCallback[closeToTestList]"]);
        }
    }["Page.useCallback[closeToTestList]"], []);
    const openServerWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[openServerWindow]": ()=>{
            console.log("Opening ServerWindow window");
            setWindowVisibility({
                "Page.useCallback[openServerWindow]": (prev)=>({
                        ...prev,
                        ServerWindow: true
                    })
            }["Page.useCallback[openServerWindow]"]);
            bringWindowToFront("ServerWindow");
        }
    }["Page.useCallback[openServerWindow]"], [
        bringWindowToFront
    ]);
    const closeServerWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[closeServerWindow]": ()=>{
            console.log("Closing ServerWindow window");
            setWindowVisibility({
                "Page.useCallback[closeServerWindow]": (prev)=>({
                        ...prev,
                        ServerWindow: false
                    })
            }["Page.useCallback[closeServerWindow]"]);
        }
    }["Page.useCallback[closeServerWindow]"], []);
    const openModelWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[openModelWindow]": (profileId = 1)=>{
            console.log(`🛰️ Opening 3D Model window for profile ID: ${profileId}`);
            // Set both state changes at once
            setThreeDModelProfileId(profileId);
            setWindowVisibility({
                "Page.useCallback[openModelWindow]": (prev)=>({
                        ...prev,
                        ThreeDModelWindow: true
                    })
            }["Page.useCallback[openModelWindow]"]);
            // Bring to front after state should be updated
            setTimeout({
                "Page.useCallback[openModelWindow]": ()=>{
                    bringWindowToFront("ThreeDModelWindow");
                    // Detailed verification to help diagnose issues
                    console.log("📊 3D Model Window Debug:");
                    console.log("- profileId set to:", profileId);
                    console.log("- visibility state:", windowVisibility.ThreeDModelWindow);
                    // Force visibility again if needed
                    if (!windowVisibility.ThreeDModelWindow) {
                        console.log("🔴 Emergency: 3D Model Window not showing. Forcing visibility...");
                        setWindowVisibility({
                            "Page.useCallback[openModelWindow]": (prev)=>({
                                    ...prev,
                                    ThreeDModelWindow: true
                                })
                        }["Page.useCallback[openModelWindow]"]);
                    }
                }
            }["Page.useCallback[openModelWindow]"], 50);
        }
    }["Page.useCallback[openModelWindow]"], [
        bringWindowToFront,
        windowVisibility.ThreeDModelWindow
    ]);
    const closeModelWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[closeModelWindow]": ()=>{
            console.log("🔴 Closing ThreeDModelWindow...");
            setWindowVisibility({
                "Page.useCallback[closeModelWindow]": (prev)=>({
                        ...prev,
                        ThreeDModelWindow: false
                    })
            }["Page.useCallback[closeModelWindow]"]);
        }
    }["Page.useCallback[closeModelWindow]"], []);
    // Create direct accessor methods to check actual window visibility
    const isToTestListVisible = windowVisibility.ToTestList;
    const isServerWindowVisible = windowVisibility.ServerWindow;
    const isThreeDModelWindowVisible = windowVisibility.ThreeDModelWindow;
    // Debug timer to monitor window states
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            const interval = setInterval({
                "Page.useEffect.interval": ()=>{
                    console.log("🔎 Window visibility status check:", {
                        toTestList: windowVisibility.ToTestList,
                        serverWindow: windowVisibility.ServerWindow,
                        threeDModelWindow: windowVisibility.ThreeDModelWindow,
                        threeDProfileId: threeDModelProfileId
                    });
                }
            }["Page.useEffect.interval"], 3000);
            return ({
                "Page.useEffect": ()=>clearInterval(interval)
            })["Page.useEffect"];
        }
    }["Page.useEffect"], [
        windowVisibility,
        threeDModelProfileId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$SYFQ2XB5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserRouter"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$SYFQ2XB5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Routes"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$SYFQ2XB5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            openToTestList: openToTestList,
                            openServerWindow: openServerWindow
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$SYFQ2XB5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/main",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            openToTestList: openToTestList,
                            closeToTestList: closeToTestList,
                            openServerWindow: openServerWindow,
                            openModelWindow: openModelWindow,
                            closeModelWindow: closeModelWindow,
                            showToTestList: isToTestListVisible,
                            showThreeDModelWindow: isThreeDModelWindowVisible,
                            threeDModelProfileId: threeDModelProfileId,
                            windowZIndexes: windowZIndexes,
                            bringWindowToFront: bringWindowToFront,
                            zIndexCounter: zIndexCounter
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    "ToTestList: ",
                    isToTestListVisible ? 'SHOW' : 'HIDE',
                    " (z:",
                    windowZIndexes.ToTestList,
                    ")",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 216,
                        columnNumber: 92
                    }, this),
                    "ServerWindow: ",
                    isServerWindowVisible ? 'SHOW' : 'HIDE',
                    " (z:",
                    windowZIndexes.ServerWindow,
                    ")",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 217,
                        columnNumber: 98
                    }, this),
                    "ModelWindow: ",
                    isThreeDModelWindowVisible ? 'SHOW' : 'HIDE',
                    " (z:",
                    windowZIndexes.ThreeDModelWindow,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "window-container",
                children: [
                    isToTestListVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        zIndex: windowZIndexes.ToTestList ?? 10001,
                        onMouseDown: ()=>bringWindowToFront("ToTestList"),
                        onClose: closeToTestList,
                        bringWindowToFront: bringWindowToFront,
                        windowZIndexes: windowZIndexes,
                        zIndexCounter: zIndexCounter
                    }, `ToTestList-${zIndexCounter}`, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this),
                    isServerWindowVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        zIndex: windowZIndexes.ServerWindow ?? 10002,
                        onMouseDown: ()=>bringWindowToFront("ServerWindow"),
                        onClose: closeServerWindow,
                        bringWindowToFront: bringWindowToFront,
                        windowZIndexes: windowZIndexes,
                        zIndexCounter: zIndexCounter
                    }, `ServerWindow-${zIndexCounter}`, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 236,
                        columnNumber: 11
                    }, this),
                    isThreeDModelWindowVisible && threeDModelProfileId !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        profileId: threeDModelProfileId,
                        zIndex: windowZIndexes.ThreeDModelWindow ?? 10003,
                        onMouseDown: ()=>bringWindowToFront("ThreeDModelWindow"),
                        onClose: closeModelWindow,
                        bringWindowToFront: bringWindowToFront,
                        windowZIndexes: windowZIndexes,
                        zIndexCounter: zIndexCounter,
                        showThreeDModelWindow: isThreeDModelWindowVisible
                    }, `ThreeDModelWindow-${zIndexCounter}`, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
_s(Page, "jgEbwp7SEdlVbmK9Eas19o8PY1A=");
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

//# sourceMappingURL=src_f2936c._.js.map