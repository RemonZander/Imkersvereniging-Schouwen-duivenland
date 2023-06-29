import React, {Component, useRef, useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../../resources/css/App.css'

// Importing Images
import Logo from '../../resources/images/logo.png';



const Header = (): JSX.Element => {
    
    const [active, setActive] = useState(false);

    const hamburgerButton = React.createRef<HTMLButtonElement>();
    const headerMobileRef = React.createRef<HTMLElement>();
    const headerNavRef = React.createRef<HTMLElement>();
    
    const hamburgerIsActive = (event: React.MouseEvent): void => { 
       const current = hamburgerButton.current;
       if (current === null) return; 

       //@ts-ignore
       const containsIsActive = current.classList.contains("is-active")
       if (!(containsIsActive)) {
            current?.classList.add("is-active")
       } else {
            current?.classList.remove("is-active");     
       }       
    }

    const toggleActive = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const mobileClassList = headerMobileRef.current?.classList;
        const containsActive = mobileClassList?.contains("is-active") ? true : false;
        if (containsActive) {
            mobileClassList?.remove("is-active");
        } else {
            mobileClassList?.add("is-active");
        }
    }   

    const onClickFunctions = [hamburgerIsActive, toggleActive];

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onClickFunctions.forEach((func) => {
            func(event);
        });
    }

    return ( 

        <div id="header">

            <div className="header-top">
          
                <div className="logo-container">
                    <img className="logo-image" src={Logo}/>
                </div>

                <div className="header-text">
                    <h1 className="header-text-1">SAMEN OP WEG NAAR</h1>
                    <h1 className="header-text-2">Bijvriendelijk Schouwen-Duivenland</h1>
                </div>

                <div className="hamburger-container">
                    <button className="hamburger" onClick={onClick} ref={hamburgerButton} id="hamburger">
                        <div id="bar"></div>
                    </button> 
                </div>

            </div>

            <nav className="header-nav" ref={headerNavRef}>
                <NavLink to={`/`} className="router-link">Home</NavLink>
                <div className="dropdown">
                    <NavLink to={`/agenda`} className="router-link">Agenda</NavLink>

                    <div className="router-link-dropdown-content">
                        <NavLink to={`/cursussen`} className="router-link">Cursussen</NavLink>
                        <NavLink to={`/lezingen`} className="router-link">Lezingen</NavLink>
                        <NavLink to={`/workshops`} className="router-link">Workshops</NavLink>
                        <NavLink to={`/imkercafe`} className="router-link">Imkercafe</NavLink>
                        <NavLink to={`/loi`} className="router-link">LOI</NavLink>
                        <NavLink to={`/vergaderingen`} className="router-link">Vergaderingen</NavLink>
                    </div>
                </div>
                <NavLink to={`/nieuws`} className="router-link">Nieuws</NavLink>
                <NavLink to={`/bijenzwerm`} className="router-link">Bijenzwerm</NavLink>
                <NavLink to={`/vrienden`} className="router-link">Vrienden</NavLink>
                <NavLink to={`/projecten`} className="router-link">Projecten</NavLink>
                <NavLink to={`/bijhouden`} className="router-link">Bijenhouden</NavLink>
                <NavLink to={`/contact`} className="router-link">Contact</NavLink>
            </nav>

            <nav className="header-nav-mobile" ref={headerMobileRef}>

                <div className="header-nav-mobile-container">

                    <NavLink to={`/`} className="router-link-mobile" id="">
                        <svg width="30" height="30" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.4844 7.5625L14.125 6.20406V2.875C14.125 2.35937 13.7031 1.9375 13.1875 1.9375H12.25C11.7344 1.9375 11.3125 2.35937 11.3125 2.875V3.39344L9.4375 1.52031C9.18156 1.27844 8.94719 1 8.5 1C8.05281 1 7.81844 1.27844 7.5625 1.52031L1.51563 7.5625C1.22312 7.86719 1 8.08937 1 8.5C1 9.02781 1.405 9.4375 1.9375 9.4375H2.875V15.0625C2.875 15.5781 3.29687 16 3.8125 16H5.6875C6.20527 16 6.625 15.5803 6.625 15.0625V11.3125C6.625 10.7969 7.04687 10.375 7.5625 10.375H9.4375C9.95312 10.375 10.375 10.7969 10.375 11.3125V15.0625C10.375 15.5803 10.326 16 10.8437 16H13.1875C13.7031 16 14.125 15.5781 14.125 15.0625V9.4375H15.0625C15.595 9.4375 16 9.02781 16 8.5C16 8.08937 15.7769 7.86719 15.4844 7.5625Z" stroke-width="2" stroke-linejoin="round"/>
                        </svg>
                        <div className="router-link-mobile-inside">Home</div>
                    </NavLink>
                    <NavLink to={`/agenda`} className="router-link-mobile" id="">
                        <svg width="30" height="30" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.21476 5.4035H13.1431M3.81229 1.00008V2.43663M3.81229 2.43663L13.187 2.43647M3.81229 2.43663C2.25898 2.43663 0.999928 3.57516 1 4.97976L1.00044 13.4569C1.00051 14.8615 2.25965 16 3.81285 16H13.1876C14.7409 16 16.0001 14.8613 16 13.4567L15.9996 4.97952C15.9995 3.57501 14.7402 2.43647 13.187 2.43647M13.187 1V2.43647M6.6254 13.033V7.94662L4.75046 9.21821M11.7815 13.033V7.94662L9.90656 9.21821" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div className="router-link-mobile-inside">Agenda</div>
                    </NavLink>
                    <NavLink to={`/nieuws`} className="router-link-mobile" id="">
                        <svg width="30" height="30" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 8V7M9 8V6M13 8V4M7 12L5.5 16M12.828 15.9444L11.0602 12.0554M3 12C1.89543 12 1 11.1046 1 10V3C1 1.89543 1.89543 1 3 1H15C16.1046 1 17 1.89543 17 3V10C17 11.1046 16.1046 12 15 12H3Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div className="router-link-mobile-inside">Nieuws</div>
                    </NavLink>
                    <NavLink to={`/bijenzwerm`} className="router-link-mobile" id="">
                        <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 14.35C7.26202 14.35 6.98406 14.2425 6.67458 13.9433C6.36197 13.6411 6.05076 13.1724 5.77531 12.5428C5.53973 12.0043 5.33965 11.3695 5.18788 10.6623C5.9491 10.5541 6.77643 10.4937 7.64697 10.4937C8.41028 10.4937 9.13974 10.5401 9.82021 10.6243C9.66749 11.3468 9.46448 11.9947 9.22469 12.5428C8.94924 13.1724 8.63803 13.6411 8.32542 13.9433C8.01594 14.2425 7.73798 14.35 7.5 14.35ZM7.64697 9.19375C6.71789 9.19375 5.81837 9.25828 4.97691 9.37934C4.90669 8.78343 4.86875 8.15346 4.86875 7.5C4.86875 6.84654 4.90669 6.21657 4.97691 5.62066C5.81837 5.74172 6.71789 5.80625 7.64697 5.80625C8.46971 5.80625 9.26998 5.75562 10.0276 5.65975C10.095 6.2441 10.1313 6.86081 10.1313 7.5C10.1313 8.13919 10.095 8.7559 10.0276 9.34025C9.26998 9.24438 8.46971 9.19375 7.64697 9.19375ZM3.69621 5.38265C3.61281 6.05946 3.56875 6.76974 3.56875 7.5C3.56875 8.23026 3.61281 8.94054 3.69621 9.61735C2.78624 9.82778 1.97784 10.1109 1.31768 10.4535C0.88968 9.55922 0.65 8.5576 0.65 7.5C0.65 6.4424 0.88968 5.44078 1.31768 4.54649C1.97784 4.88914 2.78624 5.17222 3.69621 5.38265ZM5.18788 4.33766C5.33965 3.63048 5.53973 2.9957 5.77531 2.45723C6.05076 1.82762 6.36197 1.35892 6.67458 1.0567C6.98406 0.757508 7.26202 0.65 7.5 0.65C7.73798 0.65 8.01594 0.757508 8.32542 1.0567C8.63803 1.35892 8.94924 1.82762 9.22469 2.45723C9.46448 3.00533 9.66749 3.65321 9.82021 4.37567C9.13974 4.4599 8.41028 4.50625 7.64697 4.50625C6.77643 4.50625 5.9491 4.44592 5.18788 4.33766ZM11.4312 7.5C11.4312 6.7924 11.3899 6.10356 11.3114 5.44575C12.2283 5.25341 13.052 4.98905 13.7375 4.66474C14.1309 5.52872 14.35 6.48877 14.35 7.5C14.35 8.51123 14.1309 9.47128 13.7375 10.3353C13.052 10.011 12.2283 9.74659 11.3114 9.55425C11.3899 8.89644 11.4312 8.2076 11.4312 7.5ZM13.0858 3.53408C12.5377 3.78259 11.867 3.99712 11.1034 4.16095C10.9329 3.33784 10.7001 2.58622 10.4157 1.93617C10.2893 1.64727 10.1507 1.37382 9.99992 1.1205C11.2491 1.6104 12.3194 2.45661 13.0858 3.53408ZM11.1034 10.839C11.867 11.0029 12.5377 11.2174 13.0858 11.4659C12.3194 12.5434 11.2491 13.3896 9.99992 13.8795C10.1507 13.6262 10.2893 13.3527 10.4157 13.0638C10.7001 12.4138 10.9329 11.6622 11.1034 10.839ZM4.5843 13.0638C4.7107 13.3527 4.84931 13.6262 5.00008 13.8795C3.79139 13.4055 2.75017 12.5979 1.9897 11.57C2.51094 11.3089 3.16141 11.0807 3.90986 10.9025C4.07918 11.7008 4.30723 12.4305 4.5843 13.0638ZM5.00008 1.1205C4.84931 1.37382 4.7107 1.64727 4.5843 1.93617C4.30723 2.56947 4.07918 3.29918 3.90986 4.09748C3.16141 3.91927 2.51094 3.69114 1.9897 3.42997C2.75017 2.4021 3.7914 1.59451 5.00008 1.1205Z" stroke-width="1.3"/>
                        </svg>
                        <div className="router-link-mobile-inside">Bijenzwerm</div>
                    </NavLink>
                    <NavLink to={`/vrienden`} className="router-link-mobile" id="">
                        <svg width="30" height="30" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2825 15.9998L13.2828 13.1876C13.2829 11.6342 11.9857 10.3749 10.3855 10.3749H3.89761C2.29761 10.3749 1.00051 11.6339 1.00033 13.1871L1 15.9998M18.3074 16L18.3077 13.1878C18.3078 11.6344 17.0106 10.3751 15.4104 10.3751M12.7245 1.55252C13.436 2.06498 13.8971 2.88653 13.8971 3.81262C13.8971 4.73872 13.436 5.56027 12.7245 6.07273M10.099 3.81247C10.099 5.36576 8.80182 6.62494 7.20169 6.62494C5.60156 6.62494 4.3044 5.36576 4.3044 3.81247C4.3044 2.25919 5.60156 1 7.20169 1C8.80182 1 10.099 2.25919 10.099 3.81247Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div className="router-link-mobile-inside">Vrienden</div>
                    </NavLink>
                    <NavLink to={`/projecten`} className="router-link-mobile" id="">
                        <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.18726 3.17155V1.86862C3.18726 1.38889 3.57901 1 4.06228 1H12.375C12.8582 1 13.25 1.38889 13.25 1.86862V5.34309M1.00039 13.2627L1.00046 6.6581C1.00046 5.99656 1.00021 5.0543 1 4.37204C0.999851 3.89218 1.39167 3.50364 1.87505 3.50364H6.04468L8.06089 5.64163H14.125C14.6082 5.64163 15 6.03054 15 6.51027L14.9998 13.2628C14.9998 14.2222 14.2163 15 13.2497 15L2.75043 15C1.7839 15 1.00038 14.2222 1.00039 13.2627Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div className="router-link-mobile-inside">Projecten</div>
                    </NavLink>
                    <NavLink to={`/bijhouden`} className="router-link-mobile" id="">
                        <svg width="30" height="30" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 8.5L8.5 12.25M8.5 5.72046V5.6875M1 8.5C1 4.35786 4.35787 1 8.5 1C12.6421 1 16 4.35787 16 8.5C16 12.6421 12.6421 16 8.5 16C4.35786 16 1 12.6421 1 8.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div className="router-link-mobile-inside">Bijenhouden</div>
                    </NavLink>
                    <NavLink to={`/contact`} className="router-link-mobile" id="">
                        <svg width="30" height="30" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8256 14.1618C15.8256 14.1618 14.8458 15.1134 14.6057 15.3924C14.2146 15.8051 13.7538 16 13.1497 16C13.0916 16 13.0296 16 12.9715 15.9962C11.8214 15.9236 10.7526 15.4803 9.95098 15.1019C7.75913 14.0548 5.83449 12.5682 4.23514 10.6841C2.91461 9.11338 2.03167 7.66115 1.44692 6.10191C1.08678 5.15032 0.955113 4.40892 1.0132 3.70955C1.05193 3.26242 1.22619 2.89172 1.54761 2.57452L2.86814 1.27134C3.05789 1.09554 3.25926 1 3.45676 1C3.70073 1 3.89823 1.14522 4.02215 1.26752C4.02602 1.27134 4.02989 1.27516 4.03377 1.27898C4.26999 1.49682 4.4946 1.72229 4.73082 1.96306C4.85087 2.08535 4.97479 2.20764 5.09871 2.33376L6.15591 3.37707C6.56639 3.78217 6.56639 4.15669 6.15591 4.56178C6.0436 4.67261 5.93517 4.78344 5.82287 4.89045C5.49758 5.21911 5.75311 4.96693 5.4162 5.26502C5.40846 5.27266 5.40071 5.27648 5.39684 5.28413C5.0638 5.61279 5.12577 5.93381 5.19547 6.15164C5.19934 6.16311 5.20322 6.17457 5.20709 6.18604C5.48204 6.84336 5.86929 7.46247 6.45791 8.20005L6.46178 8.20387C7.5306 9.50323 8.6575 10.516 9.90058 11.2918C10.0594 11.3911 10.222 11.4714 10.3769 11.5478C10.5163 11.6166 10.648 11.6816 10.7603 11.7504C10.7758 11.758 10.7913 11.7695 10.8068 11.7771C10.9384 11.8421 11.0623 11.8727 11.1901 11.8727C11.5115 11.8727 11.7129 11.6739 11.7788 11.609L12.5378 10.8599C12.6695 10.7299 12.8786 10.5732 13.1226 10.5732C13.3627 10.5732 13.5602 10.7223 13.6802 10.8522C13.6841 10.8561 13.6841 10.8561 13.688 10.8599L15.8217 12.9656C16.2206 13.3554 15.8256 14.1618 15.8256 14.1618Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>  
                        <div className="router-link-mobile-inside">Contact</div>
                    </NavLink>

                </div>

            </nav>

        </div>
    )
}
export default Header;