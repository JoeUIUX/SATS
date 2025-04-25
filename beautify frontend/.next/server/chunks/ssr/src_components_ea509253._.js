module.exports = {

"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/ui/progress.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Progress": (()=>Progress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-progress/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Progress({ className, value, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "progress",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "progress-indicator",
            className: "bg-primary h-full w-full flex-1 transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ui/progress.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/progress.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/ui/tabs.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tabs": (()=>Tabs),
    "TabsContent": (()=>TabsContent),
    "TabsList": (()=>TabsList),
    "TabsTrigger": (()=>TabsTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 outline-none bg-background dark:bg-background text-foreground dark:text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Card = ({ children, className = '', ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-4 ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
const CardHeader = ({ children, className = '', ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `mb-4 ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
};
const CardTitle = ({ children, className = '', ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: `text-lg font-semibold text-gray-900 dark:text-white ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
};
const CardContent = ({ children, className = '', ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
};
const CardFooter = ({ children, className = '', ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `mt-4 ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/components/ui/alert.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Alert": (()=>Alert),
    "AlertDescription": (()=>AlertDescription),
    "AlertTitle": (()=>AlertTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Alert = ({ children, className = '', variant = 'default', ...props })=>{
    const variantClasses = {
        default: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/50 dark:border-blue-800 dark:text-blue-200',
        destructive: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/50 dark:border-red-800 dark:text-red-200',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/50 dark:border-yellow-800 dark:text-yellow-200',
        success: 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/50 dark:border-green-800 dark:text-green-200'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "alert",
        className: `p-4 mb-4 border rounded-lg ${variantClasses[variant]} ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
};
const AlertTitle = ({ children, className = '', ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
        className: `font-medium text-lg mb-1 ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
};
const AlertDescription = ({ children, className = '', ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `text-sm ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/components/ui/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// components/ui/index.ts
__turbopack_context__.s({});
;
;
;
;
;
}}),
"[project]/src/components/ui/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/progress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/src/components/ToTestList/ToTestList.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "actions": "ToTestList-module__vY2V8W__actions",
  "addButton": "ToTestList-module__vY2V8W__addButton",
  "clearButton": "ToTestList-module__vY2V8W__clearButton",
  "closeButton": "ToTestList-module__vY2V8W__closeButton",
  "dark": "ToTestList-module__vY2V8W__dark",
  "deleteButton": "ToTestList-module__vY2V8W__deleteButton",
  "drag-handle": "ToTestList-module__vY2V8W__drag-handle",
  "error": "ToTestList-module__vY2V8W__error",
  "fadeOut": "ToTestList-module__vY2V8W__fadeOut",
  "form": "ToTestList-module__vY2V8W__form",
  "header": "ToTestList-module__vY2V8W__header",
  "light": "ToTestList-module__vY2V8W__light",
  "loadingIndicator": "ToTestList-module__vY2V8W__loadingIndicator",
  "popup": "ToTestList-module__vY2V8W__popup",
  "popup-show": "ToTestList-module__vY2V8W__popup-show",
  "saveStatus": "ToTestList-module__vY2V8W__saveStatus",
  "selectedRow": "ToTestList-module__vY2V8W__selectedRow",
  "success": "ToTestList-module__vY2V8W__success",
  "table": "ToTestList-module__vY2V8W__table",
});
}}),
"[project]/src/components/ToTestList/ToTestList.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ToTestList/ToTestList.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-draggable/build/cjs/cjs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
;
;
;
;
;
const ToTestList = ({ zIndex, onMouseDown, onClose, bringWindowToFront, windowZIndexes, zIndexCounter })=>{
    // Use MutableRefObject instead of RefObject to satisfy Draggable's requirements
    const nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        test: "",
        satellite: "",
        loggedBy: ""
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saveStatus, setSaveStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Important: Add refs to prevent infinite focus loop
    const hasFocused = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const initialMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const saveTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // API URL from environment or default
    const API_URL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";
    // Create portal element once on mount
    const [portalElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        // Check if portal already exists
        const existingPortal = document.getElementById("toTestList-root");
        if (existingPortal) {
            return existingPortal;
        }
        // Create new portal if needed
        const element = document.createElement("div");
        element.id = "toTestList-root";
        document.body.appendChild(element);
        return element;
    });
    // Important: Store position in sessionStorage to maintain it across renders
    const savedPosition = sessionStorage.getItem('toTestListPosition');
    const defaultPosition = savedPosition ? JSON.parse(savedPosition) : {
        x: (window.innerWidth - 800) / 2,
        y: (window.innerHeight - 500) / 2
    };
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultPosition);
    // Fetch data from the server when component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log("🔵 ToTestList mounted");
        // Focus window, but only once on initial mount
        if (initialMount.current && !hasFocused.current) {
            const focusTimeout = setTimeout(()=>{
                console.log("🎯 ToTestList initial focusing");
                onMouseDown();
                hasFocused.current = true;
            }, 50);
            initialMount.current = false;
            return ()=>clearTimeout(focusTimeout);
        }
        // Fetch data from the server
        fetchTestItems();
    }, []); // Empty dependency array - run once on mount
    // Clean up portal and timers on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            // Clear any pending save timeouts
            if (saveTimeoutRef.current) {
                clearTimeout(saveTimeoutRef.current);
                saveTimeoutRef.current = null;
            }
            hasFocused.current = false; // Reset focus state on unmount
        // Don't remove the portal element itself - this causes issues
        // Just reset internal state for next mount
        };
    }, []);
    // Save data to database whenever rows change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Don't save on initial mount
        if (initialMount.current) {
            return;
        }
        // Clear any existing timeout
        if (saveTimeoutRef.current) {
            clearTimeout(saveTimeoutRef.current);
        }
        // Set a new timeout to save data
        saveTimeoutRef.current = setTimeout(()=>{
            saveTestItems();
        }, 500); // Debounce saves to avoid too many API calls
    }, [
        rows
    ]);
    // Save position to sessionStorage whenever it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        sessionStorage.setItem('toTestListPosition', JSON.stringify(position));
    }, [
        position
    ]);
    // Fetch test items from the database
    const fetchTestItems = async ()=>{
        setIsLoading(true);
        try {
            console.log("📥 Fetching test items from server");
            const response = await fetch(`${API_URL}/test-items`);
            if (!response.ok) {
                throw new Error(`Error fetching test items: ${response.status}`);
            }
            const data = await response.json();
            console.log("📊 Received test items:", data);
            // Map the data to match our expected format
            const formattedRows = data.map((item, index)=>({
                    id: item.id,
                    sn: index + 1,
                    test: item.test,
                    satellite: item.satellite,
                    dateTime: item.dateTime,
                    loggedBy: item.loggedBy,
                    selected: false
                }));
            setRows(formattedRows);
            // Fall back to localStorage if the server returns no data
            if (formattedRows.length === 0) {
                console.log("📝 No data from server, checking localStorage");
                const savedRows = localStorage.getItem("toTestListRows");
                if (savedRows) {
                    const parsedRows = JSON.parse(savedRows);
                    setRows(parsedRows);
                    // Save the localStorage data to the server
                    saveTestItems(parsedRows);
                }
            }
        } catch (error) {
            console.error("Error fetching test items:", error);
            // Fall back to localStorage on error
            const savedRows = localStorage.getItem("toTestListRows");
            if (savedRows) {
                setRows(JSON.parse(savedRows));
            }
        } finally{
            setIsLoading(false);
        }
    };
    // Save test items to both localStorage and the database
    const saveTestItems = async (itemsToSave = rows)=>{
        if (itemsToSave.length === 0) {
            console.log("No items to save");
            return;
        }
        // Save to localStorage first (as backup)
        localStorage.setItem("toTestListRows", JSON.stringify(itemsToSave));
        // Save to the database
        try {
            console.log("💾 Saving test items to server:", itemsToSave);
            setSaveStatus("Saving...");
            const response = await fetch(`${API_URL}/test-items`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    items: itemsToSave
                })
            });
            if (!response.ok) {
                throw new Error(`Error saving test items: ${response.status}`);
            }
            const data = await response.json();
            console.log("✅ Server response:", data);
            setSaveStatus("Saved");
            // Clear saved status after 2 seconds
            setTimeout(()=>setSaveStatus(null), 2000);
        } catch (error) {
            console.error("Error saving test items:", error);
            setSaveStatus("Error saving");
            // Clear error status after 3 seconds
            setTimeout(()=>setSaveStatus(null), 3000);
        }
    };
    const addItem = ()=>{
        if (!formData.test) return; // Prevent adding empty items
        const newRow = {
            sn: rows.length + 1,
            test: formData.test,
            satellite: formData.satellite,
            dateTime: new Date().toLocaleString(),
            loggedBy: formData.loggedBy || "Anonymous"
        };
        setRows([
            ...rows,
            newRow
        ]);
        setFormData({
            test: "",
            satellite: "",
            loggedBy: ""
        });
    };
    const deleteItem = async ()=>{
        const selectedIndex = rows.findIndex((row)=>row.selected);
        if (selectedIndex !== -1) {
            const selectedRow = rows[selectedIndex];
            const updatedRows = rows.filter((_, index)=>index !== selectedIndex);
            // Update local state with recalculated S/N
            setRows(updatedRows.map((row, index)=>({
                    ...row,
                    sn: index + 1
                })));
            // If the deleted item has an ID, delete it from the server
            if (selectedRow.id) {
                try {
                    console.log(`🗑️ Deleting test item ID ${selectedRow.id} from server`);
                    const response = await fetch(`${API_URL}/test-items/${selectedRow.id}`, {
                        method: 'DELETE'
                    });
                    if (!response.ok) {
                        throw new Error(`Error deleting test item: ${response.status}`);
                    }
                    console.log("✅ Item deleted from server");
                } catch (error) {
                    console.error("Error deleting test item:", error);
                }
            }
            // Update localStorage
            if (updatedRows.length === 0) {
                localStorage.removeItem("toTestListRows");
            } else {
                localStorage.setItem("toTestListRows", JSON.stringify(updatedRows));
            }
        }
    };
    const clearList = async ()=>{
        if (window.confirm("Are you sure you want to clear all items?")) {
            setRows([]);
            localStorage.removeItem("toTestListRows"); // Explicitly clear localStorage
            // Clear all items from the server
            try {
                console.log("🧹 Clearing all test items from server");
                const response = await fetch(`${API_URL}/test-items/clear`, {
                    method: 'DELETE'
                });
                if (!response.ok) {
                    throw new Error(`Error clearing test items: ${response.status}`);
                }
                console.log("✅ All items cleared from server");
            } catch (error) {
                console.error("Error clearing test items:", error);
            }
        }
    };
    const toggleRowSelection = (index)=>{
        const updatedRows = rows.map((row, i)=>({
                ...row,
                selected: i === index ? !row.selected : false
            }));
        setRows(updatedRows);
    };
    // When the window is clicked, bring it to front using the passed function
    const handleWindowClick = (e)=>{
        // Prevent bringing to front for clicks on inputs and buttons
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLButtonElement || e.target instanceof HTMLElement && e.target.closest('button') !== null) {
            return;
        }
        console.log(`🖱️ Clicked ToTestList, bringing to front`);
        onMouseDown();
    };
    // Add state to track dark mode
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Update dark mode state on component mount and when theme changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkDarkMode = ()=>{
            const isDark = document.documentElement.classList.contains("dark");
            setIsDarkMode(isDark);
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
        return ()=>{
            observer.disconnect();
        };
    }, []);
    // Force immediate theme check when component renders
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsDarkMode(document.documentElement.classList.contains("dark"));
    }, []);
    // Compute actual z-index to use, falling back to provided zIndex if needed
    const effectiveZIndex = windowZIndexes["ToTestList"] || zIndex;
    // Handle close with confirmation
    const handleClose = (e)=>{
        e.preventDefault();
        e.stopPropagation(); // Prevents accidental reopening
        console.log("🔴 ToTestList close button clicked");
        // Update sessionStorage directly to ensure persistence
        try {
            const savedState = sessionStorage.getItem('windowVisibility');
            if (savedState) {
                const state = JSON.parse(savedState);
                state.ToTestList = false;
                sessionStorage.setItem('windowVisibility', JSON.stringify(state));
            }
        } catch (e) {
            console.error("Error updating sessionStorage:", e);
        }
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            zIndex: effectiveZIndex,
            opacity: 1,
            visibility: "visible",
            pointerEvents: "auto",
            display: "block",
            /* Force display */ willChange: "z-index",
            top: 0,
            /* Make sure it's not hidden below viewport */ left: 0 /* Make sure it's not hidden off-screen */ 
        },
        "data-window": "ToTestList",
        id: "toTestList-window",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            nodeRef: nodeRef,
            handle: ".drag-handle",
            position: position,
            onStop: (e, data)=>{
                console.log(`📌 ToTestList moved to: x=${data.x}, y=${data.y}`);
                setPosition({
                    x: data.x,
                    y: data.y
                });
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: nodeRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].popup,
                style: {
                    position: "fixed",
                    backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                    color: isDarkMode ? "#fff" : "#000",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                    width: "800px",
                    minHeight: "400px",
                    userSelect: "none",
                    willChange: "transform",
                    opacity: 1,
                    visibility: "visible",
                    display: "block" /* Force display */ 
                },
                onClick: handleWindowClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header} drag-handle`,
                        style: {
                            display: "flex",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Tests to Conduct"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                lineNumber: 441,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClose,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeButton,
                                style: {
                                    color: isDarkMode ? "white" : "black",
                                    background: "none",
                                    border: "none",
                                    fontSize: "18px",
                                    cursor: "pointer"
                                },
                                children: "✖"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                lineNumber: 442,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                        lineNumber: 440,
                        columnNumber: 11
                    }, this),
                    saveStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].saveStatus,
                        style: {
                            padding: "4px 10px",
                            margin: "0 0 10px 0",
                            fontSize: "14px",
                            textAlign: "center",
                            backgroundColor: saveStatus.includes("Error") ? "#ffdddd" : "#ddffdd",
                            color: saveStatus.includes("Error") ? "#cc0000" : "#007700",
                            borderRadius: "4px"
                        },
                        children: saveStatus
                    }, void 0, false, {
                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                        lineNumber: 459,
                        columnNumber: 13
                    }, this),
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loadingIndicator,
                        style: {
                            textAlign: "center",
                            padding: "20px"
                        },
                        children: "Loading test items..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                        lineNumber: 474,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].table,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "S/N"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Test"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Satellite"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Date/Time Logged"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Logged by"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                                    lineNumber: 489,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                            lineNumber: 484,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 483,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 5,
                                                style: {
                                                    textAlign: "center",
                                                    padding: "20px",
                                                    color: "#000000"
                                                },
                                                children: "No items added yet. Add a test below."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                                lineNumber: 495,
                                                columnNumber: 5
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                            lineNumber: 494,
                                            columnNumber: 21
                                        }, this) : rows.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    backgroundColor: row.selected ? isDarkMode ? "#003366" // Dark blue for dark mode
                                                     : "#d0ebff" // Light blue for light mode
                                                     : "transparent"
                                                },
                                                className: row.selected ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectedRow : "",
                                                onClick: (e)=>{
                                                    e.stopPropagation(); // Prevent window click handler
                                                    toggleRowSelection(index);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: row.sn
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: row.test
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                                        lineNumber: 524,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: row.satellite
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: row.dateTime
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: row.loggedBy
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                                        lineNumber: 527,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                                lineNumber: 508,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 492,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                lineNumber: 482,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Test",
                                        value: formData.test,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                test: e.target.value
                                            }),
                                        onClick: (e)=>e.stopPropagation()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 534,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Satellite",
                                        value: formData.satellite,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                satellite: e.target.value
                                            }),
                                        onClick: (e)=>e.stopPropagation()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 541,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Logged by",
                                        value: formData.loggedBy,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                loggedBy: e.target.value
                                            }),
                                        onClick: (e)=>e.stopPropagation()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 548,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            addItem();
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addButton,
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 555,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                lineNumber: 533,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actions,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            deleteItem();
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].deleteButton,
                                        disabled: !rows.some((row)=>row.selected),
                                        children: "Delete Item"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 566,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            clearList();
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].clearButton,
                                        disabled: rows.length === 0,
                                        children: "Clear List"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                        lineNumber: 576,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                                lineNumber: 565,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
                lineNumber: 421,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
            lineNumber: 412,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ToTestList/ToTestList.tsx",
        lineNumber: 397,
        columnNumber: 5
    }, this), portalElement);
};
const __TURBOPACK__default__export__ = ToTestList;
}}),
"[project]/src/components/ServerWindow/ServerWindow.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "buttonContainer": "ServerWindow-module__wfqmlq__buttonContainer",
  "closeButton": "ServerWindow-module__wfqmlq__closeButton",
  "connectButton": "ServerWindow-module__wfqmlq__connectButton",
  "drag-handle": "ServerWindow-module__wfqmlq__drag-handle",
  "form": "ServerWindow-module__wfqmlq__form",
  "header": "ServerWindow-module__wfqmlq__header",
  "input": "ServerWindow-module__wfqmlq__input",
  "logWindow": "ServerWindow-module__wfqmlq__logWindow",
  "logs": "ServerWindow-module__wfqmlq__logs",
  "minimizeButton": "ServerWindow-module__wfqmlq__minimizeButton",
  "popup": "ServerWindow-module__wfqmlq__popup",
  "popup-show": "ServerWindow-module__wfqmlq__popup-show",
  "pulse": "ServerWindow-module__wfqmlq__pulse",
  "realBadge": "ServerWindow-module__wfqmlq__realBadge",
  "simulationBadge": "ServerWindow-module__wfqmlq__simulationBadge",
  "statusBadge": "ServerWindow-module__wfqmlq__statusBadge",
  "statusIndicator": "ServerWindow-module__wfqmlq__statusIndicator",
});
}}),
"[project]/src/components/ServerWindow/ServerWindow.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router-dom/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ServerWindow/ServerWindow.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-draggable/build/cjs/cjs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/mccUtils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const ServerWindow = ({ zIndex, onMouseDown, onClose, onMinimize, bringWindowToFront, windowZIndexes, zIndexCounter })=>{
    const [serverAddress, setServerAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [serverPort, setServerPort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("9377"); // Default MCC port
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Disconnected");
    const [isConnecting, setIsConnecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [connectFailed, setConnectFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [wsConnectionVerified, setWsConnectionVerified] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shouldAutoMinimize, setShouldAutoMinimize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const logsEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigate"])();
    const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";
    // Create portal element once on mount
    const [portalElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const existingPortal = document.getElementById("serverWindow-root");
        if (existingPortal) {
            return existingPortal;
        }
        const element = document.createElement("div");
        element.id = "serverWindow-root";
        document.body.appendChild(element);
        return element;
    });
    // Initialize with previous values from localStorage if available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const socketInfo = localStorage.getItem('mccSocketInfo');
            if (socketInfo) {
                const info = JSON.parse(socketInfo);
                if (info.address) {
                    const parts = info.address.split(':');
                    if (parts.length === 2) {
                        setServerAddress(parts[0]);
                        setServerPort(parts[1]);
                    }
                }
            }
        } catch (e) {
            console.error("Error loading saved server info:", e);
        }
    }, []);
    // Important: Store position in sessionStorage to maintain it across renders
    const savedPosition = sessionStorage.getItem('serverWindowPosition');
    const defaultPosition = savedPosition ? JSON.parse(savedPosition) : {
        x: (window.innerWidth - 600) / 2,
        y: (window.innerHeight - 500) / 2
    };
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultPosition);
    const nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Auto-scroll logs to bottom when new logs are added
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (logsEndRef.current) {
            logsEndRef.current.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }, [
        logs
    ]);
    // Auto-minimize after successful connection and navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // If shouldAutoMinimize flag is set, minimize the window
        if (shouldAutoMinimize) {
            console.log("🔄 Auto-minimizing ServerWindow after navigation");
            onMinimize(status);
            setShouldAutoMinimize(false);
        }
    }, [
        shouldAutoMinimize,
        onMinimize,
        status
    ]);
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
    const handleWindowClick = ()=>{
        console.log(`Clicked ServerWindow, bringing to front`);
        onMouseDown();
    };
    // Handle minimize button click - call the parent component's onMinimize function
    const handleMinimize = (e)=>{
        e.stopPropagation();
        e.preventDefault();
        console.log("Minimizing ServerWindow, current status:", status);
        onMinimize(status);
    };
    // Directly test WebSocket connectivity
    // Change this function to test proxy connection instead
    const testProxyConnection = async ()=>{
        try {
            appendLog(`Testing connection to WebSocket proxy at ws://localhost:8080...`);
            const isConnected = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testWebSocketConnection"])(`localhost:8080`);
            if (isConnected) {
                appendLog("✅ WebSocket proxy connection successful!");
                appendLog("✅ REAL CONNECTION MODE is possible through proxy");
                setWsConnectionVerified(true);
                return true;
            } else {
                appendLog("❌ WebSocket proxy connection failed.");
                appendLog("⚠️ This indicates SIMULATION MODE will likely be used");
                return false;
            }
        } catch (error) {
            appendLog(`WebSocket proxy test error: ${error instanceof Error ? error.message : String(error)}`);
            appendLog("⚠️ Due to test error, SIMULATION MODE will be used");
            return false;
        }
    };
    const handleConnect = async ()=>{
        console.log("Connect button pressed");
        // Reset status
        setConnectFailed(false);
        setWsConnectionVerified(false);
        // Trim any whitespace from inputs
        const trimmedAddress = serverAddress.trim();
        const trimmedPort = serverPort.trim();
        if (!trimmedAddress || !trimmedPort) {
            alert("Please provide both Server Address and Port.");
            return;
        }
        try {
            console.log("Starting connection process");
            setIsConnecting(true);
            setStatus("Connecting...");
            appendLog(`Attempting to connect to MCC server at ${trimmedAddress}:${trimmedPort} via proxy...`);
            // First try to check if the proxy server is running
            try {
                appendLog("🔍 Checking if proxy server is running...");
                const proxyCheck = await fetch("http://localhost:8080", {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Accept': 'text/plain'
                    }
                });
                if (proxyCheck.ok) {
                    appendLog("✅ Proxy server is running and accessible");
                } else {
                    appendLog(`❌ Proxy server returned status ${proxyCheck.status}`);
                    appendLog("ℹ️ Please start the proxy server using 'node mcc-proxy.js'");
                    setStatus("Proxy Unavailable");
                    setConnectFailed(true);
                    setIsConnecting(false);
                    return;
                }
            } catch (error) {
                console.error("Proxy check error:", error);
                appendLog("❌ Proxy server is not running or not reachable");
                appendLog("ℹ️ Please start the proxy server using 'node mcc-proxy.js'");
                setStatus("Proxy Unavailable");
                setConnectFailed(true);
                setIsConnecting(false);
                return;
            }
            // Perform WebSocket connectivity test - this helps determine if we can use real mode
            const proxyConnected = await testProxyConnection();
            // Try to connect via the proxy and backend
            console.log(`Sending connection request to ${backendUrl}/connect_mcc`);
            const response = await fetch(`${backendUrl}/connect_mcc`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    server_address: trimmedAddress,
                    server_port: trimmedPort,
                    server_id: "mcc_client",
                    force_real: proxyConnected,
                    use_proxy: true
                })
            });
            // Process the response
            let result;
            let errorText = "";
            try {
                // Try to parse the response as JSON
                result = await response.json();
                console.log("Backend response:", result);
            } catch (error) {
                // If parsing fails, get the raw text
                errorText = await response.text();
                console.error("Non-JSON response:", errorText);
                appendLog(`HTTP error! Status: ${response.status} - ${errorText}`);
                setStatus("Connection Error");
                setConnectFailed(true);
                setIsConnecting(false);
                return;
            }
            console.log("Successfully parsed response:", result);
            // Handle different response statuses
            if (result.status === "success") {
                console.log("Connection successful, handling success case");
                // Verify if this is a fully verified connection or just a simulated success
                if (result.verified === true) {
                    setStatus("Connected");
                    appendLog(`✅ ${result.message}`);
                    if (proxyConnected) {
                        appendLog("✅ WebSocket and backend connection tests both successful!");
                        appendLog("✅ USING REAL CONNECTION MODE - Test results will use real data");
                    } else {
                        appendLog("⚠️ Backend reports success but WebSocket test failed.");
                        appendLog("🔄 ENTERING SIMULATION MODE - Test results will be simulated");
                    }
                } else if (result.simulation === true) {
                    setStatus("Connected (Simulation)");
                    appendLog(`ℹ️ ${result.message}`);
                    appendLog("🔄 SIMULATION MODE ACTIVE - All test results will be generated");
                    appendLog("ℹ️ No real hardware communication will occur");
                } else {
                    setStatus("Connected (Unverified)");
                    appendLog(`⚠️ ${result.message}`);
                    appendLog("🔄 SIMULATION MODE ACTIVE (Unverified Connection)");
                    appendLog("⚠️ Connection reported as successful but not fully verified.");
                }
                // Save the socket connection info in localStorage
                const mccSocketInfo = {
                    isReal: !result.simulation && (result.verified || proxyConnected),
                    address: `${trimmedAddress}:${trimmedPort}`,
                    simulation: result.simulation || !proxyConnected,
                    verified: result.verified || proxyConnected
                };
                // Store in localStorage so it persists across navigation
                localStorage.setItem('mccSocketInfo', JSON.stringify(mccSocketInfo));
                appendLog("📦 Connection information saved for use in the application.");
                // Add explicit simulation status indicator
                if (mccSocketInfo.simulation) {
                    appendLog("⚠️ SIMULATION MODE will be used for all hardware operations");
                } else {
                    appendLog("✅ REAL MODE will be used for hardware operations");
                }
                // Check if ToTestList is visible from sessionStorage
                const savedVisibility = sessionStorage.getItem('windowVisibility');
                let windowVisibility = {
                    ToTestList: false,
                    ServerWindow: true,
                    ThreeDModelWindow: false
                };
                if (savedVisibility) {
                    try {
                        const parsedVisibility = JSON.parse(savedVisibility);
                        windowVisibility.ToTestList = parsedVisibility.ToTestList || false;
                        windowVisibility.ThreeDModelWindow = parsedVisibility.ThreeDModelWindow || false;
                    } catch (e) {
                        console.error("Error parsing window visibility:", e);
                    }
                }
                // Store window state in sessionStorage for persistence with ServerWindow visible
                sessionStorage.setItem('windowVisibility', JSON.stringify(windowVisibility));
                console.log("Saved window state before navigation:", windowVisibility);
                // Navigate to main screen
                appendLog("🚀 Navigating to main application screen...");
                console.log("📱 About to navigate to /main");
                // Set flag to auto-minimize after navigation
                setShouldAutoMinimize(true);
                // Add a small delay to ensure all state updates complete
                setTimeout(()=>{
                    try {
                        navigate("/main");
                        console.log("📱 Navigation command executed");
                    } catch (error) {
                        console.error("Navigation error:", error);
                        appendLog(`❌ Error navigating to main screen: ${error}`);
                    }
                }, 500);
            } else if (result.status === "partial") {
                setStatus("Partial Connection");
                appendLog(`⚠️ ${result.message}`);
                appendLog("🔄 SIMULATION MODE ACTIVE - Partial connection detected");
                appendLog("⚠️ The application will use simulation mode for all features.");
                setConnectFailed(true);
            } else {
                setStatus("Failed to Connect");
                appendLog(`❌ ${result.message}`);
                appendLog("🔄 SIMULATION MODE will be used if you continue to main screen");
                setConnectFailed(true);
            }
        } catch (error) {
            console.error("Error connecting to MCC:", error);
            setStatus("Connection Error");
            appendLog(`❌ Connection error: ${error instanceof Error ? error.message : String(error)}`);
            appendLog("🔄 SIMULATION MODE will be used if you continue to main screen");
            setConnectFailed(true);
        } finally{
            setIsConnecting(false);
        }
    };
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check for dark mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkDarkMode = ()=>{
            const isDark = document.documentElement.classList.contains("dark");
            setIsDarkMode(isDark);
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
    // Get the effective z-index value
    const effectiveZIndex = windowZIndexes["ServerWindow"] || zIndex;
    // Save position to sessionStorage whenever it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        sessionStorage.setItem('serverWindowPosition', JSON.stringify(position));
    }, [
        position
    ]);
    // Get status color based on connection state
    const getStatusColor = ()=>{
        if (status === 'Connected') return '#10b981'; // Green
        if (status === 'Connected (Simulation)') return '#f59e0b'; // Amber
        if (status === 'Connecting...') return '#3b82f6'; // Blue
        if (status.includes('Failed') || status.includes('Error') || status === 'Server Unreachable') {
            return '#ef4444'; // Red
        }
        return '#6b7280'; // Gray
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        nodeRef: nodeRef,
        handle: ".drag-handle",
        position: position,
        onStop: (e, d)=>{
            console.log(`ServerWindow moved to: x=${d.x}, y=${d.y}`);
            setPosition({
                x: d.x,
                y: d.y
            });
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: nodeRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].popup,
            "data-window": "ServerWindow",
            id: "serverWindow-wrapper",
            style: {
                position: "fixed",
                zIndex: effectiveZIndex,
                backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                color: isDarkMode ? "#fff" : "#000",
                border: `1px solid ${isDarkMode ? "#333" : "#ddd"}`,
                borderRadius: "10px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)"
            },
            onClick: handleWindowClick,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header} drag-handle`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Server Connection"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                            lineNumber: 418,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttonContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleMinimize,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].minimizeButton,
                                    title: "Minimize",
                                    children: "—"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                    lineNumber: 420,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        onClose();
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeButton,
                                    title: "Close",
                                    children: "✖"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                    lineNumber: 427,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                            lineNumber: 419,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                    lineNumber: 417,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Server Address",
                            value: serverAddress,
                            onChange: (e)=>setServerAddress(e.target.value),
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                            onClick: (e)=>e.stopPropagation()
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                            lineNumber: 440,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Port",
                            value: serverPort,
                            onChange: (e)=>setServerPort(e.target.value),
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                            onClick: (e)=>e.stopPropagation()
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                            lineNumber: 448,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                handleConnect();
                            },
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].connectButton,
                            disabled: isConnecting,
                            style: {
                                backgroundColor: isConnecting ? '#9ca3af' : connectFailed ? '#ef4444' : '#00bcd4',
                                cursor: isConnecting ? 'wait' : 'pointer'
                            },
                            children: isConnecting ? "Connecting..." : connectFailed ? "Retry" : "Connect"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                            lineNumber: 456,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                    lineNumber: 439,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: '8px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusIndicator,
                            children: [
                                "Status:",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: getStatusColor(),
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    },
                                    children: [
                                        status,
                                        status === 'Connecting...' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pulse,
                                            children: "⟲"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                            lineNumber: 490,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                    lineNumber: 480,
                                    columnNumber: 13
                                }, this),
                                (status.includes('Simulation') || status === 'Connected' && serverAddress.toLowerCase() === 'localhost' || status === 'Partial Connection') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBadge} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].simulationBadge}`,
                                    children: "SIMULATION MODE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                    lineNumber: 498,
                                    columnNumber: 15
                                }, this),
                                status === 'Connected' && wsConnectionVerified && serverAddress.toLowerCase() !== 'localhost' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBadge} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].realBadge}`,
                                    children: "REAL CONNECTION"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                    lineNumber: 507,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                            lineNumber: 478,
                            columnNumber: 11
                        }, this),
                        wsConnectionVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                backgroundColor: '#10b981',
                                color: 'white',
                                padding: '2px 8px',
                                borderRadius: '9999px',
                                fontSize: '12px'
                            },
                            children: "WebSocket Verified"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                            lineNumber: 514,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                    lineNumber: 472,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logs,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Connection Logs"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                            lineNumber: 527,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logWindow,
                            style: {
                                backgroundColor: isDarkMode ? "#2a2a2a" : "#f5f5f5",
                                maxHeight: '180px',
                                overflowY: 'auto'
                            },
                            onClick: (e)=>e.stopPropagation(),
                            children: [
                                logs.map((log, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "flex-start",
                                            marginBottom: '4px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: "bold",
                                                    minWidth: "150px",
                                                    marginRight: "8px",
                                                    textAlign: "right",
                                                    fontSize: '12px',
                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                },
                                                children: [
                                                    "[",
                                                    log.timestamp,
                                                    "]"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                                lineNumber: 539,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    flex: 1,
                                                    color: log.message.includes('✅') ? '#10b981' : log.message.includes('❌') ? '#ef4444' : log.message.includes('⚠️') ? '#f59e0b' : log.message.includes('SIMULATION MODE') ? '#ff9800' : log.message.includes('REAL MODE') ? '#4caf50' : isDarkMode ? '#f3f4f6' : '#1f2937',
                                                    fontWeight: log.message.includes('SIMULATION MODE') || log.message.includes('REAL MODE') ? 'bold' : 'normal'
                                                },
                                                children: log.message
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                                lineNumber: 551,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                        lineNumber: 538,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: logsEndRef
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                    lineNumber: 565,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                            lineNumber: 528,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                    lineNumber: 526,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: '10px',
                        padding: '10px',
                        backgroundColor: isDarkMode ? '#374151' : '#f0f9ff',
                        borderRadius: '6px',
                        fontSize: '12px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                margin: '0 0 4px 0',
                                fontWeight: 'bold'
                            },
                            children: "Connection Notes:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                            lineNumber: 577,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            style: {
                                margin: '0',
                                paddingLeft: '20px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Ensure the MCC server is running at the specified address/port"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                    lineNumber: 579,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        "Verify MCC Proxy ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            children: "mcc-proxy.js"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                            lineNumber: 580,
                                            columnNumber: 34
                                        }, this),
                                        " is running"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                    lineNumber: 580,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Simulation mode will be used if there is no connection"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                    lineNumber: 581,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Minimise this window to keep the connection while working"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                                    lineNumber: 582,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                            lineNumber: 578,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
                    lineNumber: 570,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
            lineNumber: 401,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ServerWindow/ServerWindow.tsx",
        lineNumber: 392,
        columnNumber: 5
    }, this), portalElement);
};
const __TURBOPACK__default__export__ = ServerWindow;
}}),
"[project]/src/components/ModelWindow/ThreeDModelWindow.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "closeButton": "ThreeDModelWindow-module__5BjfpW__closeButton",
  "content": "ThreeDModelWindow-module__5BjfpW__content",
  "dark": "ThreeDModelWindow-module__5BjfpW__dark",
  "drag-handle": "ThreeDModelWindow-module__5BjfpW__drag-handle",
  "header": "ThreeDModelWindow-module__5BjfpW__header",
  "light": "ThreeDModelWindow-module__5BjfpW__light",
  "paused": "ThreeDModelWindow-module__5BjfpW__paused",
  "popup": "ThreeDModelWindow-module__5BjfpW__popup",
  "popup-show": "ThreeDModelWindow-module__5BjfpW__popup-show",
  "rotate-icon": "ThreeDModelWindow-module__5BjfpW__rotate-icon",
  "spin": "ThreeDModelWindow-module__5BjfpW__spin",
});
}}),
"[project]/src/components/ModelWindow/ThreeDModelWindow.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// ThreeDModelWindow.jsx - Performance-optimized for large models
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-draggable/build/cjs/cjs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ModelWindow/ThreeDModelWindow.module.css [app-ssr] (css module)");
;
;
;
;
;
// Create a global variable outside the component to persist across renders
let globalPortalElement = null;
// Component implementation with fixed visibility
const ThreeDModelWindow = (props)=>{
    const { profileId, zIndex, onMouseDown, onClose, windowZIndexes, showThreeDModelWindow, zIndexCounter, bringWindowToFront } = props;
    // Refs
    const portalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasCalledOnMouseDownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const threeInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInitializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const modelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const threeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const controlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const loaderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dracoLoaderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null); // For draco compression
    const dataFetchedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastProfileIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const portalCleanupDone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isAutoRotatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const resizeTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null); // For resize throttling
    // State
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modelPath, setModelPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadError, setLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingProgress, setLoadingProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loadingBytes, setLoadingBytes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // Add bytes loaded
    const [totalBytes, setTotalBytes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // Add total bytes
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadStatus, setUploadStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModelReady, setIsModelReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [portalError, setPortalError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [portalCreated, setPortalCreated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAutoRotating, setIsAutoRotating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [adaptiveBackgroundColor, setAdaptiveBackgroundColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modelStats, setModelStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        vertices: 0,
        size: 0
    }); // Track model stats
    const [showDetailedStats, setShowDetailedStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Toggle for stats display
    const API_URL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";
    // Z-index management
    const effectiveZIndex = windowZIndexes?.ThreeDModelWindow || zIndex;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log(`ThreeDModelWindow z-index updated to ${effectiveZIndex}`);
    }, [
        effectiveZIndex
    ]);
    // Create or get the portal element only once on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Create portal element if it doesn't exist globally
        if (!globalPortalElement) {
            globalPortalElement = document.createElement("div");
            globalPortalElement.id = "threeDModelWindow-root";
            document.body.appendChild(globalPortalElement);
            console.log("🌐 Created global portal element for 3D Model Window");
        }
        // Set the portal reference
        portalRef.current = globalPortalElement;
        // Only clean up Three.js resources on unmount, but DON'T remove the portal element
        return ()=>{
            console.log("⚠️ ThreeDModelWindow unmounting - cleaning up resources but keeping portal");
            // Prevent React from removing Three.js nodes directly
            const restore = preventReactTreeCleanup(containerRef);
            // Cancel animation frames
            if (window.threeDModelAnimationFrame) {
                cancelAnimationFrame(window.threeDModelAnimationFrame);
                delete window.threeDModelAnimationFrame;
            }
            // Clean up Three.js resources directly
            if (threeInstanceRef.current && threeInstanceRef.current.removeListeners) {
                threeInstanceRef.current.removeListeners();
            }
            if (threeInstanceRef.current && threeInstanceRef.current.renderer) {
                threeInstanceRef.current.renderer.dispose();
            }
            // Clean up Draco loader if it exists
            if (dracoLoaderRef.current) {
                dracoLoaderRef.current.dispose && dracoLoaderRef.current.dispose();
                dracoLoaderRef.current = null;
            }
            // Clear all timeouts
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
            threeInstanceRef.current = null;
            isInitializedRef.current = false;
            portalRef.current = null;
        };
    }, []);
    const handleWindowClick = ()=>{
        console.log("🖱️ Clicked ThreeDModelWindow, bringing to front");
        if (onMouseDown) {
            onMouseDown();
        }
    };
    // Implement a custom close handler that cleans up properly
    const handleClose = ()=>{
        console.log("🔴 User closing ThreeDModelWindow");
        // Call the provided onClose function
        if (onClose) {
            onClose();
        }
    };
    // Toggle auto rotation
    const toggleAutoRotation = ()=>{
        const newState = !isAutoRotating;
        // Update React state
        setIsAutoRotating(newState);
        // Update ref for direct access
        isAutoRotatingRef.current = newState;
        // Apply directly to the OrbitControls if they exist
        if (controlsRef.current) {
            console.log(`🔄 Directly setting autoRotate to ${newState}`);
            controlsRef.current.autoRotate = newState;
        }
        // Also update in threeInstance for other code to reference
        if (threeInstanceRef.current) {
            threeInstanceRef.current.autoRotate = newState;
            console.log(`🔄 Auto-rotation ${newState ? 'enabled' : 'disabled'} in threeInstance`);
        }
    };
    // Add this helper outside your component
    const preventReactTreeCleanup = (targetRef)=>{
        if (!targetRef || !targetRef.current) return;
        // Save any existing DOM content to a document fragment
        const fragment = document.createDocumentFragment();
        while(targetRef.current.firstChild){
            fragment.appendChild(targetRef.current.firstChild);
        }
        // Replace the ref's content with a dummy element that React can safely remove
        const placeholder = document.createElement('div');
        targetRef.current.appendChild(placeholder);
        // Return a cleanup function that can restore the original content if needed
        return ()=>{
            if (targetRef.current) {
                targetRef.current.appendChild(fragment);
            }
        };
    };
    // Add keyframes animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const pulseAnimation = `
      @keyframes pulse {
        0% { opacity: 0.6; }
        50% { opacity: 1; }
        100% { opacity: 0.6; }
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
        const styleEl = document.createElement('style');
        styleEl.innerHTML = pulseAnimation;
        document.head.appendChild(styleEl);
        return ()=>{
            if (document.head.contains(styleEl)) {
                document.head.removeChild(styleEl);
            }
        };
    }, []);
    // Path testing effect with proper conditional
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Always call the hook, but guard the internal logic
        if (!modelPath || !API_URL || !showThreeDModelWindow) return;
        const pathTestKey = `${modelPath}-${profileId}`;
        if (window._testedPaths && window._testedPaths[pathTestKey]) return;
        // Initialize tracking object if needed
        if (!window._testedPaths) window._testedPaths = {};
        window._testedPaths[pathTestKey] = true;
        // Now perform the tests
        const testPaths = [
            modelPath,
            `${API_URL}${modelPath.startsWith('/') ? '' : '/'}${modelPath}`,
            `/models/profile_${profileId}.glb`,
            `${window.location.origin}/models/profile_${profileId}.glb`,
            `${API_URL}/models/profile_${profileId}.glb`
        ];
        console.log("🧪 Testing all possible model paths (one-time check):");
        testPaths.forEach((path, index)=>{
            fetch(path, {
                method: 'HEAD'
            }).then((response)=>{
                console.log(`Path ${index + 1}: ${path} - ${response.status} ${response.ok ? '✓' : '✗'}`);
            }).catch((err)=>{
                console.log(`Path ${index + 1}: ${path} - Error: ${err.message}`);
            });
        });
    }, [
        modelPath,
        API_URL,
        profileId,
        showThreeDModelWindow
    ]);
    // API URL validation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // GUARD: Only run once per API URL
        if (!API_URL || window._checkedApiUrl === API_URL) return;
        window._checkedApiUrl = API_URL;
        let baseUrl = API_URL;
        // Check if API_URL ends with a slash and remove it for consistency
        if (baseUrl.endsWith('/')) {
            baseUrl = baseUrl.slice(0, -1);
        }
        // Validate and log the API URL
        console.log(`🔗 Using API URL: ${baseUrl}`);
        // Verify that the server is reachable - only once per URL
        fetch(`${baseUrl}/profiles`, {
            method: 'HEAD',
            headers: {
                'Cache-Control': 'no-cache'
            }
        }).then((response)=>{
            if (response.ok) {
                console.log(`✅ API server is reachable (${response.status})`);
            } else {
                console.warn(`⚠️ API server returned status ${response.status}`);
            }
        }).catch((err)=>{
            console.error(`❌ Cannot reach API server: ${err.message}`);
        });
    }, [
        API_URL
    ]);
    // Check for dark mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkDarkMode = ()=>{
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        };
        // Initial check
        checkDarkMode();
        // Watch for theme changes
        const observer = new MutationObserver(()=>{
            checkDarkMode();
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [
                'class'
            ]
        });
        return ()=>observer.disconnect();
    }, []);
    // Initial data fetch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isMounted = true;
        // Only execute the fetch if we're showing the window and have an API URL
        if (!showThreeDModelWindow || !API_URL) {
            // We need to still reset this flag when not visible
            if (!showThreeDModelWindow) {
                hasCalledOnMouseDownRef.current = false;
            }
            return;
        }
        // Skip if we've already fetched data for this profile
        if (dataFetchedRef.current && lastProfileIdRef.current === profileId) {
            console.log(`🔄 Skipping redundant API call for profile ${profileId}`);
            return;
        }
        console.log(`🪟 ThreeDModelWindow mounted for profile ${profileId}`);
        const fetchData = async ()=>{
            try {
                const response = await fetch(`${API_URL}/api/profile/${profileId}`);
                if (!response.ok) throw new Error(`Failed to fetch model data: ${response.status}`);
                const data = await response.json();
                console.log("📄 Model data response:", data);
                if (isMounted) {
                    if (data.model_path) {
                        setModelPath(data.model_path);
                        console.log(`🔗 Setting model path to: ${data.model_path}`);
                    } else {
                        setLoadError("No 3D model available for this profile");
                        setIsLoading(false);
                    }
                    // Mark as fetched to prevent repeated calls
                    dataFetchedRef.current = true;
                    lastProfileIdRef.current = profileId;
                }
            } catch (error) {
                if (isMounted) {
                    console.error("❌ Error fetching model data:", error);
                    setLoadError(error instanceof Error ? error.message : "Failed to load model");
                    setIsLoading(false);
                }
            }
        };
        fetchData();
        if (onMouseDown && !hasCalledOnMouseDownRef.current) {
            console.log("📱 Bringing 3D Model Window to front (one-time call)");
            onMouseDown();
            hasCalledOnMouseDownRef.current = true; // Mark that we've called it
        }
        return ()=>{
            isMounted = false;
            // Only reset fetch flag if profileId changed
            if (lastProfileIdRef.current !== profileId) {
                dataFetchedRef.current = false;
            }
        };
    }, [
        profileId,
        showThreeDModelWindow,
        API_URL,
        onMouseDown
    ]);
    // Helper function to properly dispose of Three.js resources
    function disposeNode(node) {
        if (!node) return;
        if (node.geometry) {
            node.geometry.dispose();
        }
        if (node.material) {
            if (Array.isArray(node.material)) {
                node.material.forEach((material)=>disposeMaterial(material));
            } else {
                disposeMaterial(node.material);
            }
        }
    }
    function disposeMaterial(material) {
        if (!material) return;
        // Dispose of all material properties that could be textures
        Object.keys(material).forEach((prop)=>{
            if (material[prop] && material[prop].isTexture) {
                material[prop].dispose();
            }
        });
        material.dispose();
    }
    // Top-level cleanup function with improved resource disposal
    const cleanup = ()=>{
        try {
            console.log("🧹 Running top-level cleanup");
            // Cancel any animation frames
            if (window.threeDModelAnimationFrame) {
                cancelAnimationFrame(window.threeDModelAnimationFrame);
                delete window.threeDModelAnimationFrame;
            }
            // Clear any pending resize timeouts
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
                resizeTimeoutRef.current = null;
            }
            // Properly dispose of model resources
            if (modelRef.current) {
                modelRef.current.traverse(disposeNode);
            }
            // Clear Three.js resources
            if (threeInstanceRef.current) {
                // Dispose scene and renderer if they exist
                if (threeInstanceRef.current.renderer) {
                    threeInstanceRef.current.renderer.dispose();
                }
                // Remove event listeners if they were added
                if (threeInstanceRef.current.removeListeners) {
                    threeInstanceRef.current.removeListeners();
                }
                // Clear the reference
                threeInstanceRef.current = null;
            }
            // Clear controls reference
            if (controlsRef.current) {
                controlsRef.current.dispose && controlsRef.current.dispose();
                controlsRef.current = null;
            }
            // Clear loader reference
            loaderRef.current = null;
            // Clear Draco loader reference
            if (dracoLoaderRef.current) {
                dracoLoaderRef.current.dispose && dracoLoaderRef.current.dispose();
                dracoLoaderRef.current = null;
            }
            // Reset the initialization flag but DON'T clear container contents through React
            isInitializedRef.current = false;
            setIsModelReady(false);
            // Reset model reference
            modelRef.current = null;
            // Reset adaptive background color
            setAdaptiveBackgroundColor(null);
        } catch (error) {
            console.error("❌ Safe Cleanup Error:", error);
        }
    };
    // Setup Three.js after component is fully mounted
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!showThreeDModelWindow || !containerRef.current || !modelPath || isInitializedRef.current) {
            return;
        }
        console.log("🔧 Ready to initialize Three.js:", {
            showThreeDModelWindow,
            containerExists: !!containerRef.current,
            modelPath,
            alreadyInitialized: isInitializedRef.current
        });
        // Delay Three.js initialization to ensure DOM stability
        const initTimer = setTimeout(()=>{
            if (containerRef.current) {
                console.log("⏱️ Delayed initialization starting now");
                initThreeJS();
            } else {
                console.log("❌ Container no longer exists after delay");
            }
        }, 300);
        return ()=>{
            clearTimeout(initTimer);
        };
    }, [
        showThreeDModelWindow,
        modelPath
    ]);
    // Initialize Three.js safely with performance optimizations
    const initThreeJS = ()=>{
        // Early exit if already initialized or container disappeared
        if (isInitializedRef.current || !containerRef.current) return;
        isInitializedRef.current = true;
        __turbopack_context__.r("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i).then((THREE)=>{
            // Store THREE reference for use in other functions
            threeRef.current = THREE;
            // First import DRACOLoader for compression support
            __turbopack_context__.r("[project]/node_modules/three/examples/jsm/loaders/DRACOLoader.js [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i).then(({ DRACOLoader })=>{
                // Then import GLTFLoader
                __turbopack_context__.r("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i).then(({ GLTFLoader })=>{
                    // Finally import OrbitControls
                    __turbopack_context__.r("[project]/node_modules/three/examples/jsm/controls/OrbitControls.js [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i).then(({ OrbitControls })=>{
                        // Safe check if component is still mounted
                        if (!containerRef.current) {
                            console.log("Container no longer exists, aborting Three.js setup");
                            return;
                        }
                        try {
                            // Setup Three.js scene
                            const width = containerRef.current.clientWidth;
                            const height = containerRef.current.clientHeight;
                            // Create renderer with optimizations
                            const renderer = new THREE.WebGLRenderer({
                                antialias: true,
                                alpha: true,
                                powerPreference: "high-performance",
                                precision: "mediump" // Medium precision is usually sufficient
                            });
                            // Optimize renderer settings
                            renderer.setSize(width, height);
                            // Limit pixel ratio for high DPI displays
                            renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
                            // Create scene with frustum culling enabled
                            const scene = new THREE.Scene();
                            scene.frustumCulled = true; // Enable frustum culling
                            scene.background = new THREE.Color(isDarkMode ? 0x1a1a1a : 0xf5f5f5);
                            // Create camera
                            const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
                            camera.position.set(5, 5, 10);
                            // Add lights
                            const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
                            scene.add(ambientLight);
                            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
                            directionalLight.position.set(10, 10, 5);
                            scene.add(directionalLight);
                            // Create controls with auto-rotation
                            const controls = new OrbitControls(camera, renderer.domElement);
                            controls.enableDamping = true;
                            controls.dampingFactor = 0.05; // Add damping for smoother movement
                            // Get the initial auto-rotation state from state/ref
                            controls.autoRotate = isAutoRotatingRef.current;
                            controls.autoRotateSpeed = 1.0; // Slower for better performance
                            // Store controls in ref for direct access from UI
                            controlsRef.current = controls;
                            // Log the initial auto-rotation state
                            console.log(`🔄 Controls created with autoRotate=${controls.autoRotate}`);
                            // Add renderer to container
                            if (containerRef.current) {
                                containerRef.current.appendChild(renderer.domElement);
                            } else {
                                console.error("Container lost during initialization");
                                return;
                            }
                            // Function to clean up resources
                            const cleanupThreeResources = ()=>{
                                try {
                                    // Cancel any animation frames first
                                    if (window.threeDModelAnimationFrame) {
                                        cancelAnimationFrame(window.threeDModelAnimationFrame);
                                        delete window.threeDModelAnimationFrame;
                                    }
                                    // Dispose of resources
                                    if (controls) controls.dispose();
                                    // Remove DOM elements carefully
                                    if (renderer && renderer.domElement) {
                                        try {
                                            const parent = renderer.domElement.parentNode;
                                            if (parent && parent.contains(renderer.domElement)) {
                                                parent.removeChild(renderer.domElement);
                                            }
                                        } catch (e) {
                                            console.warn("Could not remove renderer element:", e);
                                        }
                                        renderer.dispose();
                                    }
                                    // Clear references
                                    scene.clear();
                                    isInitializedRef.current = false;
                                } catch (error) {
                                    console.error("❌ Local cleanup error:", error);
                                }
                            };
                            // Function to calculate dominant color from a model
                            const calculateDominantColor = (model)=>{
                                try {
                                    // Make sure we have a valid THREE reference
                                    if (!threeRef.current) {
                                        console.error("THREE not available for color calculation");
                                        return null;
                                    }
                                    // Create a small offscreen renderer to capture the model
                                    const offscreenRenderer = new threeRef.current.WebGLRenderer({
                                        antialias: false,
                                        preserveDrawingBuffer: true
                                    });
                                    offscreenRenderer.setSize(16, 16); // Smaller for better performance
                                    // Create temporary camera and scene
                                    const tempScene = new threeRef.current.Scene();
                                    const tempCamera = new threeRef.current.PerspectiveCamera(45, 1, 0.1, 1000);
                                    tempCamera.position.set(5, 5, 10);
                                    // Add model to temp scene
                                    tempScene.add(model.clone());
                                    // Add lighting
                                    const ambientLight = new threeRef.current.AmbientLight(0xffffff, 0.7);
                                    tempScene.add(ambientLight);
                                    // Render the scene
                                    offscreenRenderer.render(tempScene, tempCamera);
                                    // Get pixel data
                                    const gl = offscreenRenderer.getContext();
                                    const pixels = new Uint8Array(16 * 16 * 4);
                                    gl.readPixels(0, 0, 16, 16, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
                                    // Calculate average color, skipping black/transparent pixels
                                    let r = 0, g = 0, b = 0, total = 0;
                                    for(let i = 0; i < pixels.length; i += 4){
                                        // Skip transparent or black pixels
                                        if (pixels[i + 3] > 10 && (pixels[i] > 5 || pixels[i + 1] > 5 || pixels[i + 2] > 5)) {
                                            r += pixels[i];
                                            g += pixels[i + 1];
                                            b += pixels[i + 2];
                                            total++;
                                        }
                                    }
                                    // Cleanup
                                    offscreenRenderer.dispose();
                                    if (total === 0) return null; // No valid pixels
                                    // Get average
                                    r = Math.floor(r / total);
                                    g = Math.floor(g / total);
                                    b = Math.floor(b / total);
                                    // Create a contrasting background color (inverted with reduced intensity)
                                    const invR = 255 - r;
                                    const invG = 255 - g;
                                    const invB = 255 - b;
                                    // Create a subtle background (blend inverted with white/black)
                                    const baseColor = isDarkMode ? 0 : 255;
                                    const blendFactor = 0.85; // Subtlety factor
                                    const bgR = Math.floor(invR * (1 - blendFactor) + baseColor * blendFactor);
                                    const bgG = Math.floor(invG * (1 - blendFactor) + baseColor * blendFactor);
                                    const bgB = Math.floor(invB * (1 - blendFactor) + baseColor * blendFactor);
                                    console.log(`🎨 Detected dominant color: rgb(${r},${g},${b})`);
                                    console.log(`🎨 Created background color: rgb(${bgR},${bgG},${bgB})`);
                                    return new threeRef.current.Color(bgR / 255, bgG / 255, bgB / 255);
                                } catch (err) {
                                    console.error("❌ Error calculating dominant color:", err);
                                    return null;
                                }
                            };
                            // Make sure we have the correct full path to the model
                            let fullModelPath = modelPath;
                            if (modelPath) {
                                if (modelPath.startsWith('http')) {
                                    // Already a full URL
                                    fullModelPath = modelPath;
                                } else if (modelPath.startsWith('/models/')) {
                                    // This is a path to the API server's models folder
                                    fullModelPath = `${API_URL}${modelPath}`;
                                } else if (modelPath.startsWith('/')) {
                                    // Some other absolute path
                                    fullModelPath = `${API_URL}${modelPath}`;
                                } else {
                                    // Relative path
                                    fullModelPath = `${API_URL}/${modelPath}`;
                                }
                            }
                            console.log('🔍 Path Construction (Improved):');
                            console.log(`- Original model path: "${modelPath}"`);
                            console.log(`- API URL: "${API_URL}"`);
                            console.log(`- Using path: "${fullModelPath}"`);
                            // Only use these two paths for model loading:
                            const priorityPaths = [
                                fullModelPath,
                                `${API_URL}/models/profile_${profileId}.glb`
                            ];
                            // Add timeout handling with longer initial timeout
                            let loadTimeout = setTimeout(()=>{
                                console.warn("⚠️ Model loading timeout - retrying with cache busting...");
                                retryLoading();
                            }, 30000); // 30 second timeout for large models
                            // Setup Draco compression loader for better performance
                            const dracoLoader = new DRACOLoader();
                            dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.5/');
                            dracoLoader.setDecoderConfig({
                                type: 'js'
                            });
                            dracoLoaderRef.current = dracoLoader;
                            // Create the loader with Draco compression
                            const loader = new GLTFLoader();
                            loader.setDRACOLoader(dracoLoader);
                            loaderRef.current = loader;
                            const retryLoading = ()=>{
                                clearTimeout(loadTimeout);
                                console.log("🔄 Retrying model load with cache busting...");
                                // Try with a cache-busting parameter
                                const cacheBuster = `?t=${Date.now()}`;
                                // Try a different path construction approach on retry
                                const retryPath = modelPath?.startsWith('/') ? `${window.location.origin}${modelPath}${cacheBuster}` : `${fullModelPath}${cacheBuster}`;
                                console.log(`🔄 Retry path: ${retryPath}`);
                                // Use loaderRef.current instead of loader
                                if (loaderRef.current) {
                                    loaderRef.current.load(retryPath, onModelLoaded, onProgress, onError);
                                } else {
                                    console.error("❌ Loader is not available for retry");
                                    setLoadError("Cannot load model: loader unavailable");
                                    setIsLoading(false);
                                }
                            };
                            // Helper function to simplify geometry for better performance
                            const optimizeMesh = (mesh)=>{
                                // Skip non-mesh objects
                                if (!mesh.isMesh) return mesh;
                                // Skip already optimized meshes
                                if (mesh.userData.optimized) return mesh;
                                try {
                                    // Get original geometry
                                    const geometry = mesh.geometry;
                                    // Skip non-BufferGeometry
                                    if (!geometry.isBufferGeometry) return mesh;
                                    // Skip geometries with missing attributes
                                    if (!geometry.attributes.position) return mesh;
                                    // Mark as optimized to avoid processing it again
                                    mesh.userData.optimized = true;
                                    // Add frustum culling
                                    mesh.frustumCulled = true;
                                    return mesh;
                                } catch (err) {
                                    console.warn("Error optimizing mesh:", err);
                                    return mesh;
                                }
                            };
                            // Create Level of Detail for large models
                            const setupLOD = (model, box, size)=>{
                                try {
                                    // If the model isn't very large, return it as is
                                    if (countVertices(model) < 100000) {
                                        return model;
                                    }
                                    // If THREE.LOD isn't available, return the original model
                                    if (!threeRef.current.LOD) {
                                        return model;
                                    }
                                    console.log("📊 Setting up LOD for large model");
                                    // Create a new LOD object
                                    const lod = new threeRef.current.LOD();
                                    // Add the original model as the highest detail level
                                    lod.addLevel(model, 0);
                                    // Clone the model for lower detail levels
                                    const simplifiedModel = model.clone();
                                    // Simplify the model by traversing it and applying optimizations
                                    simplifiedModel.traverse((node)=>{
                                        if (node.isMesh) {
                                            optimizeMesh(node);
                                        }
                                    });
                                    // Add the simplified model for viewing at a distance
                                    lod.addLevel(simplifiedModel, size * 1.5);
                                    // Return the LOD object
                                    return lod;
                                } catch (err) {
                                    console.warn("Failed to setup LOD:", err);
                                    return model;
                                }
                            };
                            // Model loaded handler with performance optimizations
                            const onModelLoaded = (gltf)=>{
                                clearTimeout(loadTimeout);
                                if (!containerRef.current) {
                                    cleanupThreeResources();
                                    return;
                                }
                                try {
                                    console.log("✅ Model loaded successfully - processing model data");
                                    const model = gltf.scene;
                                    // Store model in ref for rotation controls
                                    modelRef.current = model;
                                    // Center and scale model
                                    const box = new THREE.Box3().setFromObject(model);
                                    const center = new THREE.Vector3();
                                    box.getCenter(center);
                                    model.position.sub(center);
                                    const size = box.getSize(new THREE.Vector3()).length();
                                    const scale = 5 / size;
                                    model.scale.set(scale, scale, scale);
                                    // Add more detailed diagnostic logging
                                    const vertexCount = countVertices(model);
                                    console.log(`📊 Model stats: vertices=${vertexCount}, size=${size}`);
                                    // Store model stats for UI display
                                    setModelStats({
                                        vertices: vertexCount,
                                        triangles: Math.round(vertexCount / 3),
                                        size: size,
                                        fileSize: totalBytes > 0 ? (totalBytes / (1024 * 1024)).toFixed(2) + " MB" : "Unknown"
                                    });
                                    // Optimize entire model for better performance
                                    model.traverse((node)=>{
                                        if (node.isMesh) {
                                            // Apply optimizations to each mesh
                                            optimizeMesh(node);
                                            // Simplify material if possible
                                            if (node.material) {
                                                if (node.material.map) {
                                                    // Downscale textures for better performance
                                                    node.material.map.minFilter = THREE.LinearFilter;
                                                    node.material.map.magFilter = THREE.LinearFilter;
                                                    node.material.map.anisotropy = 1; // Lower anisotropy for performance
                                                }
                                            }
                                        }
                                    });
                                    // Calculate and set adaptive background color based on model
                                    try {
                                        console.log("🎨 Analyzing model for dominant color...");
                                        const dominantColor = calculateDominantColor(model);
                                        if (dominantColor) {
                                            scene.background = dominantColor;
                                            setAdaptiveBackgroundColor(dominantColor.getStyle());
                                            console.log(`🎨 Set background to: ${dominantColor.getStyle()}`);
                                        }
                                    } catch (err) {
                                        console.error("❌ Error setting adaptive background:", err);
                                    }
                                    // Apply Level of Detail for large models
                                    const finalModel = vertexCount > 100000 ? setupLOD(model, box, size) : model;
                                    scene.add(finalModel);
                                    setIsLoading(false);
                                    setIsModelReady(true);
                                    console.log("✅ Model successfully added to scene");
                                } catch (err) {
                                    console.error("❌ Error processing loaded model:", err);
                                    setLoadError(`Error processing model: ${err.message}`);
                                    setIsLoading(false);
                                }
                            };
                            // Helper function to count vertices (for diagnostics)
                            const countVertices = (model)=>{
                                let count = 0;
                                model.traverse((obj)=>{
                                    if (obj.isMesh && obj.geometry) {
                                        const position = obj.geometry.getAttribute('position');
                                        if (position) count += position.count;
                                    }
                                });
                                return count;
                            };
                            // Improved progress tracking
                            const onProgress = (progress)=>{
                                try {
                                    // Log all progress events for debugging
                                    console.log(`📊 Progress: loaded=${progress.loaded} bytes, total=${progress.total || 'unknown'} bytes`);
                                    // Store bytes loaded for better user feedback
                                    setLoadingBytes(progress.loaded || 0);
                                    // Ensure we have valid progress values
                                    if (progress.total > 0) {
                                        setTotalBytes(progress.total);
                                        const percent = Math.round(progress.loaded / progress.total * 100);
                                        setLoadingProgress(percent);
                                        console.log(`📊 Loading progress: ${percent}%`);
                                    } else {
                                        // If we can't calculate percentage, show indeterminate progress
                                        console.log(`📊 Loading in progress (bytes: ${progress.loaded})`);
                                        // Simulate progress to give user feedback
                                        setLoadingProgress((prev)=>prev < 90 ? prev + 5 : prev);
                                    }
                                } catch (err) {
                                    console.warn("⚠️ Error reporting progress:", err);
                                    // Keep advancing progress to provide feedback
                                    setLoadingProgress((prev)=>prev < 90 ? prev + 5 : prev);
                                }
                            };
                            const onError = (error)=>{
                                clearTimeout(loadTimeout);
                                console.error("❌ Error loading model:", error);
                                // Direct fetch check for file existence
                                console.log(`🔍 Checking if GLB file exists at: ${fullModelPath}`);
                                fetch(fullModelPath, {
                                    method: 'HEAD'
                                }).then((response)=>{
                                    console.log(`📋 HEAD check for ${fullModelPath}: ${response.status} ${response.ok ? '✓' : '✗'}`);
                                    if (!response.ok) {
                                        console.log('⚠️ Primary file path returned error, will try alternatives');
                                    }
                                }).catch((err)=>{
                                    console.log(`❌ Error checking file: ${err.message}`);
                                });
                                // Detailed error reporting
                                if (error.target && error.target instanceof XMLHttpRequest) {
                                    console.error(`❌ XHR Error Status: ${error.target.status}`);
                                    console.error(`❌ XHR Error Response: ${error.target.responseText || 'No response'}`);
                                }
                                setLoadError(`Error loading model: ${error.message || "Unknown error"}`);
                                setIsLoading(false);
                                // Attempt to provide more specific error information
                                if (error.message && error.message.includes("404")) {
                                    setLoadError(`Model file not found (404). Check if '${fullModelPath}' exists on the server.`);
                                } else if (error.message && error.message.includes("Failed to fetch")) {
                                    setLoadError("Network error. Check your internet connection or server status.");
                                } else if (error.message && error.message.includes("Unexpected token")) {
                                    setLoadError("Invalid model format. The file may be corrupted or not a valid GLB file.");
                                } else if (error.message && error.message.includes("Cross-Origin")) {
                                    setLoadError("Cross-origin (CORS) error. Server configuration issue.");
                                }
                            };
                            // Log the paths we'll try
                            console.log('🚀 Will attempt to load from:', priorityPaths);
                            // Load model with proper loader reference
                            const tryLoadModel = (path, onSuccess, onProgress, onError)=>{
                                console.log(`🔄 Attempting to load model from: ${path}`);
                                // Make sure we use the loader from the ref
                                if (loaderRef.current) {
                                    loaderRef.current.load(path, onSuccess, onProgress, onError);
                                } else {
                                    console.error("❌ Loader is not available");
                                    setLoadError("Cannot load model: loader unavailable");
                                    setIsLoading(false);
                                }
                            };
                            // Start with the first path
                            tryLoadModel(priorityPaths[0], onModelLoaded, onProgress, (error)=>{
                                console.error(`❌ Failed to load from primary path: ${error.message}`);
                                // If that fails, try the second path
                                if (priorityPaths.length > 1) {
                                    console.log(`🔄 Trying fallback path: ${priorityPaths[1]}`);
                                    tryLoadModel(priorityPaths[1], onModelLoaded, onProgress, (finalError)=>{
                                        console.error(`❌ All paths failed: ${finalError.message}`);
                                        setLoadError("Could not load model file. Please upload a model file.");
                                        setIsLoading(false);
                                    });
                                } else {
                                    setLoadError(`Error loading model: ${error.message}`);
                                    setIsLoading(false);
                                }
                            });
                            // Optimized animation loop
                            const animate = ()=>{
                                if (!containerRef.current) {
                                    if (window.threeDModelAnimationFrame) {
                                        cancelAnimationFrame(window.threeDModelAnimationFrame);
                                        delete window.threeDModelAnimationFrame;
                                    }
                                    return;
                                }
                                // Update controls - this is critical for auto-rotation to work
                                if (controlsRef.current) {
                                    // Ensure auto-rotation state is always synced from React state
                                    controlsRef.current.autoRotate = isAutoRotatingRef.current;
                                    controlsRef.current.update();
                                }
                                renderer.render(scene, camera);
                                window.threeDModelAnimationFrame = requestAnimationFrame(animate);
                            };
                            // Throttled resize handler for better performance
                            const handleResize = ()=>{
                                if (resizeTimeoutRef.current) {
                                    clearTimeout(resizeTimeoutRef.current);
                                }
                                resizeTimeoutRef.current = setTimeout(()=>{
                                    if (!containerRef.current) return;
                                    const width = containerRef.current.clientWidth;
                                    const height = containerRef.current.clientHeight;
                                    renderer.setSize(width, height);
                                    camera.aspect = width / height;
                                    camera.updateProjectionMatrix();
                                }, 100); // 100ms throttle
                            };
                            window.addEventListener('resize', handleResize);
                            // Store instance functions for cleanup
                            threeInstanceRef.current = {
                                animate,
                                renderer,
                                removeListeners: ()=>{
                                    window.removeEventListener('resize', handleResize);
                                    if (resizeTimeoutRef.current) {
                                        clearTimeout(resizeTimeoutRef.current);
                                        resizeTimeoutRef.current = null;
                                    }
                                },
                                autoRotate: isAutoRotatingRef.current
                            };
                            // Start animation loop
                            animate();
                        } catch (error) {
                            console.error("Error initializing Three.js:", error);
                            setLoadError("Failed to initialize 3D viewer");
                            setIsLoading(false);
                        }
                    });
                });
            });
        }).catch((error)=>{
            console.error("Error loading Three.js libraries:", error);
            setLoadError("Failed to load 3D libraries");
            setIsLoading(false);
        });
    };
    // Format file size for display
    const formatFileSize = (bytes)=>{
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = [
            "Bytes",
            "KB",
            "MB",
            "GB"
        ];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    // Handle file upload
    const handleFileUpload = async ()=>{
        if (!selectedFile) {
            setUploadStatus('Error: No file selected');
            return;
        }
        if (!selectedFile.name.endsWith('.glb')) {
            setUploadStatus('Error: Only .glb files are supported');
            return;
        }
        // Check file size (100MB limit)
        const maxSize = 100 * 1024 * 1024; // 100MB in bytes
        if (selectedFile.size > maxSize) {
            setUploadStatus(`Error: File exceeds 100MB limit (${(selectedFile.size / 1024 / 1024).toFixed(2)}MB)`);
            return;
        }
        // Clean up existing Three.js instance before uploading
        cleanup();
        isInitializedRef.current = false;
        setIsLoading(true);
        setUploadStatus('Uploading model...');
        // Create FormData with progress tracking
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('profile_id', String(profileId));
        try {
            console.log(`📤 Starting upload for ${selectedFile.name}`);
            // Track upload progress using XMLHttpRequest
            const xhr = new XMLHttpRequest();
            // Set up progress tracking
            xhr.upload.addEventListener('progress', (event)=>{
                if (event.lengthComputable) {
                    const percentComplete = Math.round(event.loaded / event.total * 100);
                    setUploadStatus(`Uploading: ${percentComplete}%`);
                    console.log(`📤 Upload progress: ${percentComplete}%`);
                }
            });
            // Create a promise to handle the XHR response
            const uploadPromise = new Promise((resolve, reject)=>{
                xhr.addEventListener('load', ()=>{
                    if (xhr.status >= 200 && xhr.status < 300) {
                        try {
                            const response = JSON.parse(xhr.responseText);
                            resolve(response);
                        } catch (e) {
                            reject(new Error('Invalid response format'));
                        }
                    } else {
                        reject(new Error(`Server returned ${xhr.status}: ${xhr.statusText}`));
                    }
                });
                xhr.addEventListener('error', ()=>{
                    reject(new Error('Network error during upload'));
                });
                xhr.addEventListener('abort', ()=>{
                    reject(new Error('Upload aborted'));
                });
            });
            // Set up the request
            xhr.open('POST', `${API_URL}/api/upload-glb`, true);
            xhr.send(formData);
            // Wait for the upload to complete
            const result = await uploadPromise;
            console.log('✅ Upload successful:', result);
            // Reset data fetched flag to load new model
            dataFetchedRef.current = false;
            setModelPath(result.model_path);
            setUploadStatus('Model uploaded successfully! Loading model...');
            setLoadError(null);
            setSelectedFile(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
            // Preload the model with direct fetch to validate
            const modelUrl = result.model_path.startsWith('http') ? result.model_path : `${API_URL}${result.model_path.startsWith('/') ? '' : '/'}${result.model_path}`;
            console.log(`🔎 Checking uploaded model at: ${modelUrl}`);
            // Validate the uploaded file with a HEAD request
            fetch(modelUrl, {
                method: 'HEAD'
            }).then((response)=>{
                if (response.ok) {
                    console.log('✅ Uploaded model file is accessible');
                } else {
                    console.warn(`⚠️ Uploaded model file returned status ${response.status}`);
                    setUploadStatus(`Warning: Model may not load correctly (HTTP ${response.status})`);
                }
            }).catch((err)=>{
                console.error('❌ Error validating uploaded file:', err);
            });
            // Automatically hide success message after delay
            setTimeout(()=>{
                setUploadStatus(null);
            }, 5000);
        } catch (error) {
            console.error('❌ Error uploading model:', error);
            setUploadStatus(`Error: ${error.message}`);
            setLoadError(`Upload failed: ${error.message}`);
            setIsLoading(false);
        }
    };
    // Check if portal is ready before attempting to render
    const portalReady = !!portalRef.current;
    // Don't render if window shouldn't be visible or portal ref isn't ready
    // CRITICAL FIX: Always place useState, useRef, useEffect BEFORE any conditional return
    if (!showThreeDModelWindow || !portalReady) {
        console.log("🚫 Not rendering ThreeDModelWindow - visibility:", showThreeDModelWindow, "portal ready:", portalReady);
        return null;
    }
    // Get position from sessionStorage or use default
    const defaultPosition = {
        x: Math.max(0, (window.innerWidth - 600) / 2),
        y: Math.max(0, (window.innerHeight - 550) / 2)
    };
    console.log("📍 Model window position:", defaultPosition);
    console.log("✅ Rendering ThreeDModelWindow - visibility:", showThreeDModelWindow);
    console.log("📊 Z-index:", effectiveZIndex);
    try {
        // Use portalRef.current instead of portalElement
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "three-model-window-container",
            style: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: effectiveZIndex,
                pointerEvents: "none" // Allow clicks to pass through the container but not the window
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                nodeRef: nodeRef,
                handle: ".drag-handle",
                defaultPosition: defaultPosition,
                bounds: "parent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: nodeRef,
                    style: {
                        position: "absolute",
                        zIndex: effectiveZIndex,
                        backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                        color: isDarkMode ? "#fff" : "#000",
                        width: "600px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                        overflow: "hidden",
                        pointerEvents: "auto",
                        visibility: "visible",
                        opacity: 1,
                        willChange: "transform, z-index"
                    },
                    onClick: handleWindowClick,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "drag-handle",
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "15px",
                                backgroundColor: isDarkMode ? "#2c2c2c" : "#f0f0f0",
                                borderTopLeftRadius: "10px",
                                borderTopRightRadius: "10px",
                                cursor: "grab"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        margin: 0
                                    },
                                    children: "Satellite Model Viewer"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                    lineNumber: 1318,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: (e)=>{
                                        e.stopPropagation(); // Prevent event bubbling to the window
                                        handleClose();
                                    },
                                    style: {
                                        color: isDarkMode ? "white" : "black",
                                        background: "none",
                                        border: "none",
                                        fontSize: "18px",
                                        cursor: "pointer"
                                    },
                                    children: "✖"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                    lineNumber: 1319,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                            lineNumber: 1305,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "20px"
                            },
                            children: [
                                uploadStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        margin: "10px 0",
                                        padding: "10px",
                                        borderRadius: "4px",
                                        backgroundColor: uploadStatus.includes('Error') ? isDarkMode ? "#3d0000" : "#ffdddd" : isDarkMode ? "#004d00" : "#ddffdd",
                                        color: uploadStatus.includes('Error') ? isDarkMode ? "#ff8080" : "#d00000" : isDarkMode ? "#80ff80" : "#00b000"
                                    },
                                    children: uploadStatus
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                    lineNumber: 1339,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginBottom: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                setShowDetailedStats(!showDetailedStats);
                                            },
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                padding: "8px 14px",
                                                backgroundColor: showDetailedStats ? "#00bcd4" : isDarkMode ? "#444" : "#f0f0f0",
                                                color: showDetailedStats ? "white" : isDarkMode ? "#fff" : "#444",
                                                border: "none",
                                                borderRadius: "4px",
                                                cursor: "pointer",
                                                fontSize: "14px",
                                                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                                transition: "all 0.2s ease"
                                            },
                                            children: showDetailedStats ? "Hide Stats" : "Show Stats"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                            lineNumber: 1362,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                toggleAutoRotation();
                                            },
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                padding: "8px 14px",
                                                backgroundColor: isAutoRotating ? "#00bcd4" : isDarkMode ? "#444" : "#f0f0f0",
                                                color: isAutoRotating ? "white" : isDarkMode ? "#fff" : "#444",
                                                border: "none",
                                                borderRadius: "4px",
                                                cursor: "pointer",
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                                transition: "all 0.2s ease"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        display: "inline-block",
                                                        marginRight: "8px",
                                                        animation: isAutoRotating ? "spin 2s linear infinite" : "none"
                                                    },
                                                    children: "🔄"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                    lineNumber: 1405,
                                                    columnNumber: 19
                                                }, this),
                                                isAutoRotating ? "Stop Rotation" : "Auto-Rotate"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                            lineNumber: 1385,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                    lineNumber: 1355,
                                    columnNumber: 15
                                }, this),
                                showDetailedStats && modelStats.vertices > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        backgroundColor: isDarkMode ? "#111" : "#f5f5f5",
                                        borderRadius: "4px",
                                        padding: "8px 12px",
                                        marginBottom: "10px",
                                        fontSize: "14px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Vertices:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                    lineNumber: 1425,
                                                    columnNumber: 24
                                                }, this),
                                                " ",
                                                modelStats.vertices.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                            lineNumber: 1425,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Triangles:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                    lineNumber: 1426,
                                                    columnNumber: 24
                                                }, this),
                                                " ",
                                                modelStats.triangles.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                            lineNumber: 1426,
                                            columnNumber: 19
                                        }, this),
                                        totalBytes > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "File Size:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                    lineNumber: 1428,
                                                    columnNumber: 26
                                                }, this),
                                                " ",
                                                formatFileSize(totalBytes)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                            lineNumber: 1428,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                    lineNumber: 1418,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: containerRef,
                                    id: "model-container",
                                    style: {
                                        height: "400px",
                                        marginBottom: "20px",
                                        borderRadius: "4px",
                                        overflow: "hidden",
                                        border: `1px solid ${isDarkMode ? "#333" : "#ddd"}`,
                                        position: "relative",
                                        backgroundColor: adaptiveBackgroundColor || (isDarkMode ? "#111" : "#f5f5f5")
                                    },
                                    children: [
                                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: isDarkMode ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.7)",
                                                zIndex: 10
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginBottom: "20px",
                                                        textAlign: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: "18px",
                                                                marginBottom: "8px"
                                                            },
                                                            children: "Loading 3D model..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                            lineNumber: 1463,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: "14px",
                                                                opacity: 0.8
                                                            },
                                                            children: loadingProgress > 0 ? `${loadingProgress}% (${formatFileSize(loadingBytes)})` : "Initializing..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                            lineNumber: 1466,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                    lineNumber: 1462,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: "70%",
                                                        height: "12px",
                                                        backgroundColor: isDarkMode ? "#333" : "#ddd",
                                                        borderRadius: "6px",
                                                        overflow: "hidden",
                                                        boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: `${loadingProgress > 0 ? loadingProgress : 5}%`,
                                                            height: "100%",
                                                            backgroundColor: loadingProgress > 0 ? "#00bcd4" : "#999",
                                                            transition: "width 0.3s ease",
                                                            animation: loadingProgress === 0 ? "pulse 1.5s infinite" : "none"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                        lineNumber: 1481,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                    lineNumber: 1473,
                                                    columnNumber: 21
                                                }, this),
                                                loadingProgress === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        console.log("🔄 Manual retry requested");
                                                        // Force remount of component
                                                        cleanup();
                                                        isInitializedRef.current = false;
                                                        setModelPath(null);
                                                        setTimeout(()=>{
                                                            fetch(`${API_URL}/api/profile/${profileId}`).then((res)=>res.json()).then((data)=>{
                                                                if (data.model_path) {
                                                                    setModelPath(data.model_path);
                                                                    console.log("🔄 Forced model reload");
                                                                }
                                                            });
                                                        }, 500);
                                                    },
                                                    style: {
                                                        marginTop: "20px",
                                                        padding: "8px 16px",
                                                        backgroundColor: isDarkMode ? "#444" : "#eee",
                                                        border: "none",
                                                        borderRadius: "4px",
                                                        cursor: "pointer",
                                                        color: isDarkMode ? "#fff" : "#000"
                                                    },
                                                    children: "Retry Loading"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                    lineNumber: 1492,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                            lineNumber: 1449,
                                            columnNumber: 19
                                        }, this),
                                        loadError && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: isDarkMode ? "#1a1a1a" : "#f5f5f5",
                                                color: "#e74c3c",
                                                padding: "20px",
                                                textAlign: "center",
                                                zIndex: 10
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginBottom: "20px"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "48",
                                                        height: "48",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                                lineNumber: 1547,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "12",
                                                                y1: "8",
                                                                x2: "12",
                                                                y2: "12"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                                lineNumber: 1548,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "12",
                                                                y1: "16",
                                                                x2: "12",
                                                                y2: "16"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                                lineNumber: 1549,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                        lineNumber: 1546,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                    lineNumber: 1545,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: loadError
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                    lineNumber: 1552,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                            lineNumber: 1529,
                                            columnNumber: 19
                                        }, this),
                                        !modelPath && !isLoading && !loadError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: isDarkMode ? "#1a1a1a" : "#f5f5f5",
                                                zIndex: 10
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginBottom: "10px"
                                                    },
                                                    children: "No 3D model available"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                    lineNumber: 1571,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: "14px",
                                                        opacity: 0.7
                                                    },
                                                    children: "Upload a .glb file below"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                    lineNumber: 1572,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                            lineNumber: 1558,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                    lineNumber: 1434,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "10px",
                                        padding: "15px",
                                        backgroundColor: isDarkMode ? "#111" : "#f5f5f5",
                                        borderRadius: "4px",
                                        border: "1px solid " + (isDarkMode ? "#333" : "#ddd"),
                                        marginTop: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                margin: 0,
                                                fontSize: "16px",
                                                fontWeight: "bold"
                                            },
                                            children: "Upload 3D Model"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                            lineNumber: 1588,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "14px",
                                                opacity: 0.8,
                                                marginBottom: "8px"
                                            },
                                            children: [
                                                "Accepts ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: ".glb"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                    lineNumber: 1593,
                                                    columnNumber: 27
                                                }, this),
                                                " files - Max size: 100MB"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                            lineNumber: 1592,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: "10px",
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: ".glb",
                                                    ref: fileInputRef,
                                                    onClick: (e)=>e.stopPropagation(),
                                                    onChange: (e)=>{
                                                        if (e.target.files && e.target.files.length > 0) {
                                                            const file = e.target.files[0];
                                                            console.log(`📦 Selected file: ${file.name}, size: ${(file.size / 1024 / 1024).toFixed(2)}MB`);
                                                            setSelectedFile(file);
                                                        }
                                                    },
                                                    style: {
                                                        flex: 1,
                                                        padding: "8px",
                                                        border: "1px solid " + (isDarkMode ? "#444" : "#ccc"),
                                                        borderRadius: "4px",
                                                        backgroundColor: isDarkMode ? "#222" : "#fff",
                                                        color: isDarkMode ? "#fff" : "#000"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                    lineNumber: 1597,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        handleFileUpload();
                                                    },
                                                    disabled: !selectedFile || isLoading,
                                                    style: {
                                                        padding: "10px 16px",
                                                        backgroundColor: selectedFile && !isLoading ? "#4caf50" : "#ccc",
                                                        color: "white",
                                                        border: "none",
                                                        borderRadius: "4px",
                                                        cursor: selectedFile && !isLoading ? "pointer" : "not-allowed",
                                                        fontWeight: "bold",
                                                        minWidth: "80px"
                                                    },
                                                    children: isLoading ? "Uploading..." : "Upload"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                    lineNumber: 1619,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                            lineNumber: 1596,
                                            columnNumber: 17
                                        }, this),
                                        selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: "8px",
                                                padding: "8px",
                                                backgroundColor: isDarkMode ? "#222" : "#e7f7e7",
                                                borderRadius: "4px",
                                                fontSize: "14px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        "Selected: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: selectedFile.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                            lineNumber: 1648,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                    lineNumber: 1648,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        "Size: ",
                                                        (selectedFile.size / 1024 / 1024).toFixed(2),
                                                        "MB"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                                    lineNumber: 1649,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                            lineNumber: 1641,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                                    lineNumber: 1578,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                            lineNumber: 1336,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                    lineNumber: 1287,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
                lineNumber: 1281,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ModelWindow/ThreeDModelWindow.jsx",
            lineNumber: 1269,
            columnNumber: 7
        }, this), portalRef.current);
    } catch (err) {
        console.error("Error rendering portal:", err);
        setPortalError(true);
        return null;
    }
};
const __TURBOPACK__default__export__ = ThreeDModelWindow;
}}),
"[project]/src/components/WelcomeWindow/WelcomeWindow.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
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

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-draggable/build/cjs/cjs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/WelcomeWindow/WelcomeWindow.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router-dom/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// Use require if not using images.d.ts
//const logo = require("../../assets/logo.jpg");
const WelcomeWindow = ({ openToTestList, openServerWindow })=>{
    const [dateTime, setDateTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showToTestList, setShowToTestList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showServerWindow, setShowServerWindow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasTests, setHasTests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Track if there are rows in the list
    const nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigate"])();
    // Check if the page is in dark mode
    const isDarkMode = document.documentElement.classList.contains("dark");
    // Function to format date and time as DD/MM/YYYY HH:MM:SS Timezone
    const formatDateTime = (date)=>{
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        // Add timezone information
        // in format e.g. "America/New_York" or "Asia/Singapore"
        // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        // alternative, in format e.g. "GMT+0800"
        const timezoneOffset = date.toTimeString().split(' ')[1];
        // update const here accordingly as timezone or timezoneOffset
        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds} (${timezoneOffset})`;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        nodeRef: nodeRef,
        handle: `.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].welcomeHeader}`,
        positionOffset: {
            x: "-50%",
            y: "-50%"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: nodeRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].welcomeWindow,
            style: {
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                minHeight: "200px",
                background: isDarkMode ? "linear-gradient(135deg, #000000, #1a1a1a)" : "linear-gradient(135deg, #ffffff, #e6f7ff)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].welcomeHeader} drag-handle`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/assets/SaRCLogo.png",
                            alt: "Satellite Research Centre Logo",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo,
                            draggable: "false",
                            onDragStart: (e)=>e.preventDefault()
                        }, void 0, false, {
                            fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                            lineNumber: 109,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Satellite Research Centre"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                            lineNumber: 116,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Satellite Automated Testing System"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                            lineNumber: 117,
                            columnNumber: 9
                        }, this),
                        dateTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dateTime,
                            children: dateTime
                        }, void 0, false, {
                            fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                            lineNumber: 118,
                            columnNumber: 22
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                    lineNumber: 108,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttonContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttonWithNotification,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].welcomeButton,
                                    onClick: handleToTestListOpen,
                                    children: "Tests to Conduct"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                                    lineNumber: 122,
                                    columnNumber: 11
                                }, this),
                                hasTests && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].notificationDot
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                                    lineNumber: 128,
                                    columnNumber: 24
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                            lineNumber: 121,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].welcomeButton,
                            onClick: handleServerWindowOpen,
                            children: "MCC"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                            lineNumber: 130,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
                    lineNumber: 120,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/WelcomeWindow/WelcomeWindow.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = WelcomeWindow;
}}),
"[project]/src/components/Taskbar/Taskbar.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "pulse": "Taskbar-module__gjB6Va__pulse",
  "pulseAnimation": "Taskbar-module__gjB6Va__pulseAnimation",
  "statusConnected": "Taskbar-module__gjB6Va__statusConnected",
  "statusError": "Taskbar-module__gjB6Va__statusError",
  "statusIndicator": "Taskbar-module__gjB6Va__statusIndicator",
  "statusSimulation": "Taskbar-module__gjB6Va__statusSimulation",
  "statusWaiting": "Taskbar-module__gjB6Va__statusWaiting",
  "taskAppear": "Taskbar-module__gjB6Va__taskAppear",
  "taskbar": "Taskbar-module__gjB6Va__taskbar",
  "taskbarItem": "Taskbar-module__gjB6Va__taskbarItem",
  "taskbarItemIcon": "Taskbar-module__gjB6Va__taskbarItemIcon",
  "taskbarItemProgress": "Taskbar-module__gjB6Va__taskbarItemProgress",
  "taskbarItemProgressFill": "Taskbar-module__gjB6Va__taskbarItemProgressFill",
  "taskbarItemTitle": "Taskbar-module__gjB6Va__taskbarItemTitle",
  "taskbarItems": "Taskbar-module__gjB6Va__taskbarItems",
});
}}),
"[project]/src/components/Taskbar/Taskbar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Taskbar$2f$Taskbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Taskbar/Taskbar.module.css [app-ssr] (css module)");
;
;
;
const Taskbar = ({ minimizedWindows })=>{
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check for dark mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkDarkMode = ()=>{
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        };
        // Initial check
        checkDarkMode();
        // Watch for theme changes
        const observer = new MutationObserver(()=>{
            checkDarkMode();
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [
                'class'
            ]
        });
        return ()=>observer.disconnect();
    }, []);
    // Don't render if there are no minimized windows
    if (minimizedWindows.length === 0) {
        return null;
    }
    // Get icon based on window type and status
    const getWindowIcon = (windowId, status)=>{
        if (windowId === "ServerWindow") {
            // Server window with status-based icon
            if (status?.includes("Connected")) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "2",
                            y: "2",
                            width: "20",
                            height: "8",
                            rx: "2",
                            ry: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "2",
                            y: "14",
                            width: "20",
                            height: "8",
                            rx: "2",
                            ry: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "6",
                            y1: "6",
                            x2: "6.01",
                            y2: "6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "6",
                            y1: "18",
                            x2: "6.01",
                            y2: "18"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this);
            } else if (status?.includes("Error") || status?.includes("Failed")) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "12",
                            y1: "9",
                            x2: "12",
                            y2: "13"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "12",
                            y1: "17",
                            x2: "12.01",
                            y2: "17"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this);
            } else {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "2",
                            y: "2",
                            width: "20",
                            height: "8",
                            rx: "2",
                            ry: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "2",
                            y: "14",
                            width: "20",
                            height: "8",
                            rx: "2",
                            ry: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "6",
                            y1: "6",
                            x2: "6.01",
                            y2: "6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "6",
                            y1: "18",
                            x2: "6.01",
                            y2: "18"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this);
            }
        } else if (windowId === "ToTestList") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 6h13"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 12h13"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 18h13"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3 6h.01"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3 12h.01"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3 18h.01"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this);
        } else if (windowId === "ThreeDModelWindow") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "3.27 6.96 12 12.01 20.73 6.96"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "12",
                        y1: "22.08",
                        x2: "12",
                        y2: "12"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this);
        }
        // Default icon for other windows
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "3",
                    width: "18",
                    height: "18",
                    rx: "2",
                    ry: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "9",
                    x2: "21",
                    y2: "9"
                }, void 0, false, {
                    fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
            lineNumber: 101,
            columnNumber: 7
        }, this);
    };
    // Get status text for display
    const getStatusText = (windowId, status)=>{
        if (windowId === "ServerWindow") {
            if (status?.includes("Connected")) {
                return status.includes("Simulation") ? "Sim Mode" : "Connected";
            } else if (status?.includes("Error")) {
                return "Error";
            } else if (status?.includes("Failed")) {
                return "Failed";
            } else if (status?.includes("Partial")) {
                return "Partial";
            } else {
                return status || "Offline";
            }
        }
        return "";
    };
    // Get status class for the indicator
    const getStatusClass = (windowId, status)=>{
        if (windowId === "ServerWindow") {
            if (status?.includes("Connected")) {
                return status.includes("Simulation") ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Taskbar$2f$Taskbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusSimulation : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Taskbar$2f$Taskbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusConnected;
            } else if (status?.includes("Error") || status?.includes("Failed")) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Taskbar$2f$Taskbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusError;
            } else if (status?.includes("Partial")) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Taskbar$2f$Taskbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusSimulation;
            } else {
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Taskbar$2f$Taskbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusWaiting;
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Taskbar$2f$Taskbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusWaiting;
    };
    // Get icon color based on status
    const getIconColor = (windowId, status)=>{
        if (windowId === "ServerWindow") {
            if (status?.includes("Connected")) {
                return status.includes("Simulation") ? "#f59e0b" : "#10b981";
            } else if (status?.includes("Error") || status?.includes("Failed")) {
                return "#ef4444";
            } else if (status?.includes("Partial")) {
                return "#f59e0b";
            }
        }
        return isDarkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(17, 24, 39, 0.7)";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Taskbar$2f$Taskbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].taskbar,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Taskbar$2f$Taskbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].taskbarItems,
            children: minimizedWindows.map((window)=>{
                const statusText = getStatusText(window.id, window.status);
                const iconColor = getIconColor(window.id, window.status);
                const statusClass = getStatusClass(window.id, window.status);
                const isActive = window.status?.includes("Running") || window.status === "Connecting...";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Taskbar$2f$Taskbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].taskbarItem,
                    onClick: ()=>{
                        console.log(`Restoring window: ${window.id}`);
                        window.onRestore();
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Taskbar$2f$Taskbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusIndicator} ${statusClass} ${isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Taskbar$2f$Taskbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pulseAnimation : ''}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                            lineNumber: 175,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Taskbar$2f$Taskbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].taskbarItemIcon,
                            style: {
                                color: iconColor
                            },
                            children: getWindowIcon(window.id, window.status)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                            lineNumber: 177,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden',
                                flex: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Taskbar$2f$Taskbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].taskbarItemTitle,
                                    children: window.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                                    lineNumber: 182,
                                    columnNumber: 17
                                }, this),
                                statusText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '10px',
                                        color: iconColor,
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    },
                                    children: statusText
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                                    lineNumber: 186,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                            lineNumber: 181,
                            columnNumber: 15
                        }, this),
                        window.progress !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Taskbar$2f$Taskbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].taskbarItemProgress,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Taskbar$2f$Taskbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].taskbarItemProgressFill,
                                style: {
                                    width: `${window.progress}%`,
                                    backgroundColor: iconColor
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                                lineNumber: 200,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                            lineNumber: 199,
                            columnNumber: 17
                        }, this)
                    ]
                }, window.id, true, {
                    fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
                    lineNumber: 166,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
            lineNumber: 158,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Taskbar/Taskbar.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Taskbar;
}}),
"[project]/src/components/FontLoader/FontLoader.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/components/FontLoader/FontLoader.tsx
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const FontLoader = ({ fontFamily = 'System Default' })=>{
    // Add a state to track loaded fonts and force re-renders when needed
    const [loadedFonts, setLoadedFonts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Font loading logic - only load non-system fonts
        const loadFonts = async ()=>{
            // Map of font names to Google Fonts URLs
            const fontUrls = {
                'Roboto': 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
                'Open Sans': 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap',
                'Montserrat': 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap',
                'Source Code Pro': 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600&display=swap'
            };
            // Extract the base font name from the fontFamily string
            const baseFontName = fontFamily.split(',')[0].trim().replace(/["']/g, '');
            // Skip loading for system default
            if (baseFontName === 'Arial' || baseFontName === 'System Default') {
                return;
            }
            // Find matching font URL
            let fontUrl = '';
            for (const [fontName, url] of Object.entries(fontUrls)){
                if (baseFontName.includes(fontName) || fontName.includes(baseFontName)) {
                    fontUrl = url;
                    break;
                }
            }
            if (!fontUrl) return;
            // Add the font link to the document head if not already loaded
            if (!loadedFonts.includes(baseFontName)) {
                const link = document.createElement('link');
                link.href = fontUrl;
                link.rel = 'stylesheet';
                document.head.appendChild(link);
                // Update loaded fonts state
                setLoadedFonts((prev)=>[
                        ...prev,
                        baseFontName
                    ]);
                console.log(`Loaded font: ${baseFontName}`);
            }
            // Add a specific style element for this font to force the preview to update
            const styleId = `font-preview-style-${baseFontName.replace(/\s+/g, '-')}`;
            let styleEl = document.getElementById(styleId);
            if (!styleEl) {
                styleEl = document.createElement('style');
                styleEl.id = styleId;
                document.head.appendChild(styleEl);
            }
            styleEl.textContent = `
        .font-preview-${baseFontName.replace(/\s+/g, '-')} {
          font-family: ${fontFamily} !important;
        }
      `;
        };
        loadFonts();
        // Force a re-render with setTimeout to ensure the font has loaded
        const forceUpdateTimer = setTimeout(()=>{
            // This empty function will trigger a re-render due to the useEffect dependency
            setLoadedFonts((prev)=>[
                    ...prev
                ]);
        }, 100);
        return ()=>clearTimeout(forceUpdateTimer);
    }, [
        fontFamily,
        loadedFonts
    ]); // Add loadedFonts as a dependency
    // This component doesn't render anything visible
    return null;
};
const __TURBOPACK__default__export__ = FontLoader;
}}),

};

//# sourceMappingURL=src_components_ea509253._.js.map