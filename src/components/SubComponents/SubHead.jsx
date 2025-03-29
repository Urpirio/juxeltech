import { usePathname } from "next/navigation";


const Titles = () => {

    const path = usePathname();
    if( path === '/'){
        return(<title>JuxelTech</title>)
    }else if(path === '/Services'){
        return(<title>Services</title>)
    }else if(path === '/ContactUs'){
        return(<title>ContactUs</title>)
    }else if(path === '/Proyects'){
        return(<title>Proyects</title>)
    };

};
export default Titles;