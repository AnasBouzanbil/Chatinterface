
"use client";
import React from "react";

type Props = { children?: React.ReactNode };

export const Sidebar: React.FC<Props> = ({ children }) => {
	const [collapsed, setCollapsed] = React.useState(false);

	return (
		<aside
			className={
				"fixed left-0 top-0 h-screen bg-white border-r border-gray-200 shadow-sm flex flex-col transition-all duration-200 ease-in-out z-40 " +
				(collapsed ? "w-16" : "w-56")
			}
		>
			<div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
				<div className="flex items-center gap-2">
					<div className="text-2xl">🔷</div>
					<span className={"font-semibold text-sm " + (collapsed ? "hidden" : "block")}>My App</span>
				</div>

				<button
					aria-label="Toggle sidebar"
					onClick={() => setCollapsed((s) => !s)}
					className="p-1 rounded hover:bg-gray-100"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className={"h-5 w-5 transform transition-transform " + (collapsed ? "rotate-180" : "rotate-0")}
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
					</svg>
				</button>
			</div>

			<nav className="flex-1 p-3 space-y-1">
				<button
					className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 text-left"
					type="button"
				>
					<span className="text-xl">💬</span>
					<span className={collapsed ? "hidden" : "block"}>Chat</span>
				</button>

				<button className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 text-left" type="button">
					<span className="text-xl">📥</span>
					<span className={collapsed ? "hidden" : "block"}>Inbox</span>
				</button>
			</nav>

			{children}
		</aside>
	);
};

export const SidebarContent: React.FC<Props> = ({ children }) => <>{children}</>;
export const SidebarGroup: React.FC<Props> = ({ children }) => <>{children}</>;
export const SidebarGroupContent: React.FC<Props> = ({ children }) => <>{children}</>;
export const SidebarGroupLabel: React.FC<Props> = ({ children }) => <>{children}</>;
export const SidebarMenu: React.FC<Props> = ({ children }) => <>{children}</>;
export const SidebarMenuItem: React.FC<Props> = ({ children }) => <>{children}</>;
export const SidebarMenuButton: React.FC<{ asChild?: boolean; children?: React.ReactNode }> = ({ asChild, children }) =>
	asChild ? <>{children}</> : <button>{children}</button>;

export default Sidebar;

