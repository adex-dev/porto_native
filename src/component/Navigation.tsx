 type NavItem = {
        title: string;
        link: string;
    };
const navMenu: NavItem[] = [
  { title: "Home", link: "/home" },
  { title: "Case Studies", link: "/studies" },
  { title: "Projects", link: "/projects" },
  { title: "Experience", link: "/experience" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
];
export function Navigation(){
   
    return (
        <nav id="navigation" aria-label="Main navigation">
           {
            navMenu.map(items =>(
                <a href={items.link}>{items.title}</a>
            ))
        }
        </nav>
    )
}