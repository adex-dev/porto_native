 type NavItem = {
        title: string;
        link: string;
    };
const navMenu: NavItem[] = [
  { title: "Home", link: "/porto_native/#/home" },
  { title: "Case Studies", link: "/porto_native/#/studies" },
  { title: "Projects", link: "/porto_native/#/projects" },
  { title: "Experience", link: "/porto_native/#/experience" },
  { title: "About", link: "/porto_native/#/about" },
  { title: "Contact", link: "/porto_native/#/contact" },
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