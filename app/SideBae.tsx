'use client'

import Sidebar from "@/components/ui/sidebar";
import { ChevronRight, Inbox, MessageCircleMore, PlusIcon } from "lucide-react";
import { useState } from "react";

export function AppSidebar() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
        
        {/* <div className="text-center"> */}
            <aside   className={`fixed left-0 top-0 h-screen bg-[#F7F7F7] border-r border-gray-200 shadow-sm flex flex-col items-center z-40 ${
    collapsed ? "w-16" : "w-20"
  }`}>
                {/* <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100"> */}
                    <div className="flex items-center gap-2 top-4 mt-4 flex flex-col space-y-4">
                          <ChevronRight className="w-6 h-6 text-gray-500"  
                      
                          />

                          <PlusIcon className="w-8 h-8 p-1 bg-gray-200 text-gray-600 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer border-t-2 border-white" />

                              <MessageCircleMore className="w-6 h-6 text-gray-500" />
                              <Inbox className="w-6 h-6 text-gray-500" /> 
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        </div>
            </aside>
            
            </>
    );

}