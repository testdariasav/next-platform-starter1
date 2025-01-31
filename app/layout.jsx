import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};




export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-blue-900">
                <div className="flex flex-col min-h-screen px-6 bg-grid-pattern sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <div className="grow">{children}</div>
                        <Footer />
                    </div>
                </div>
            </body>
            <script>

                function handler(){
                    console.log("hover")

                }
                
                console.log(&quot;Test1231 log&quot;);

                const element = document.querySelectorAll(&quot;a[href=&apos;/revalidation&apos;]&quot;)[0];
                console.log(element);
                
                element.onmouseover = handler;

                const dropdown = document.createElement(&quot;select&quot;);
                const option = document.createElement(&quot;option&quot;);
                option.value = &quot;test3&quot;;
                option.textContent = &quot;test4&quot;;
                dropdown.appendChild(option);

                console.log(dropdown);
                console.log(option);
                console.log(element.parentNode);
                
                

                 
            </script>
        </html>
    );
}
