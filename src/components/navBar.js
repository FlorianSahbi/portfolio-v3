import React, { Component } from 'react';
// import { animateScroll as scroller } from 'react-scroll'
import './navBar.css';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formationListPosY: 0,
            currentJobPosY: 0,
            projetsPosY: 0,
            competencesPosY: 0,
            hobbiesPosY: 0,
            headerPosY: 0
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        document.getElementsByClassName('navBarButtonHome')[0].classList.add("navBarActiveButton");
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        this.setState({
            headerPosY: document.getElementsByClassName('home')[0].offsetTop,
            currentJobPosY: document.getElementsByClassName('currentJob')[0].offsetTop,
            projetsPosY: document.getElementsByClassName('projets')[0].offsetTop,
            competencesPosY: document.getElementsByClassName('competences')[0].offsetTop,
            hobbiesPosY: document.getElementsByClassName('hobbies')[0].offsetTop
        })
        var y = window.scrollY;

        if (y >= this.state.currentJobPosY && y < this.state.projetsPosY) {
            document.getElementsByClassName('navBarButtonCurrentJob')[0].classList.add("navBarActiveButton");
        } else {
            document.getElementsByClassName('navBarButtonCurrentJob')[0].classList.remove("navBarActiveButton");
        }

        if (y >= this.state.projetsPosY && y < this.state.competencesPosY) {
            document.getElementsByClassName('navBarButtonProjets')[0].classList.add("navBarActiveButton");
        } else {
            document.getElementsByClassName('navBarButtonProjets')[0].classList.remove("navBarActiveButton");
        }

        if (y >= this.state.competencesPosY && y < this.state.hobbiesPosY) {
            document.getElementsByClassName('navBarButtonCompetences')[0].classList.add("navBarActiveButton");
        } else {
            document.getElementsByClassName('navBarButtonCompetences')[0].classList.remove("navBarActiveButton");
        }

        if (y >= this.state.hobbiesPosY) {
            document.getElementsByClassName('navBarButtonHobbies')[0].classList.add("navBarActiveButton");
        } else {
            document.getElementsByClassName('navBarButtonHobbies')[0].classList.remove("navBarActiveButton");
        }
    }

    // scrollTo(element) {
    //     scroller.scrollTo(element, {
    //         duration: 800,
    //         delay: 0,
    //         smooth: 'easeInOutQuart'
    //     })
    // }

    hover(e) {
    }

    render() {
        return (
            <nav id="navBar" className="navBar">
                <ul className="navBarButtons">

                    <li className="navBarButton navBarButtonHome"
                        onClick={() => this.scrollTo('home')}
                        onMouseOver={() => this.hover(Event)}>
                        Accueil
                    </li>

                    <li className="navBarButton navBarButtonFormationList"
                        onClick={() => this.scrollTo('formationList')}
                        onMouseOver={() => this.hover(Event)}>
                        Formations
                    </li>

                    <li className="navBarButton navBarButtonCurrentJob"
                        onClick={() => this.scrollTo('currentJob')}
                        onMouseOver={() => this.hover(Event)}>
                        Mon poste
                    </li>

                    <li className="navBarButton navBarButtonProjets"
                        onClick={() => this.scrollTo('projets')}
                        onMouseOver={() => this.hover(Event)}>
                        Projets
                    </li>

                    <li className="navBarButton navBarButtonCompetences"
                        onClick={() => this.scrollTo('competences')}
                        onMouseOver={() => this.hover(Event)}>
                        Compétences
                    </li>

                    <li className="navBarButton navBarButtonHobbies"
                        onClick={() => this.scrollTo('hobbies')}
                        onMouseOver={() => this.hover(Event)}>
                        Goût prononcé pour...
                    </li>

                </ul>
            </nav>
        )
    }
}

export default NavBar;