

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full bg-slate-100">
            {/* Navbar 导航栏 */}

            <main className="pt-40 pb-20 bg-slate-100">
                {children}
            </main>

            {/* Footer  页脚  */}
        </div>
    )
}
