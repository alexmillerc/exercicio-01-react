import { Component } from "react";
import "./App.css";
import { MainMenu } from "./components/MainMenu";
import { NavMenu } from "./components/NavMenu";
import { SearchBar } from "./components/SearchBar";
import { MainImg } from "./components/MainImg";
import { MainText } from "./components/MainText";
import { SideBar } from "./components/SideBar";

import img1 from './imagens/img1.png'
import img2 from './imagens/img2.png'
import img3 from './imagens/img3.png'


export class App extends Component {
  state = {
    menuItems: [
      { title: 'Google', link: 'https://google.com' },
      { title: 'Apple', link: 'https://apple.com/br' },
      { title: 'Microsoft', link: 'https://microsoft.com' },
      { title: 'PUC Minas', link: 'https://pucminas.br' },
    ],
    mainImg: [
      { imgs: img1, alt: 'magem 1' },
      { imgs: img2, alt: 'imagem 2' },
      { imgs: img3, alt: 'imagem 3' },

    ],
    mainText: [
      { text: 'Lorem ipsum litora habitasse condimentum donec aenean sollicitudin elit porta curae habitasse mi, suscipit curabitur morbi et mauris nam curae lobortis vitae id torquent ad, ligula nunc eu iaculis bibendum curabitur fusce lobortis at dictumst risus. dolor commodo aliquam egestas vitae habitant aliquet bibendum vehicula, eros pharetra cras dui luctus duis maecenas, curae conubia vulputate laoreet torquent risus id. quisque ut platea nec mi leo suspendisse quisque, condimentum euismod sit fringilla curae libero, tincidunt cursus tempus eleifend suspendisse faucibus. libero sed habitasse sagittis mauris fames justo torquent, vestibulum placerat gravida laoreet vitae mattis faucibus, netus accumsan malesuada tortor amet bibendum.' },
      { text: 'Primis aucto scelerisque hendrerit cubilia urna massa ultrices ornare id dapibus, quam sit faucibus velit lobortis cubilia pellentesque convallis eget, luctus eu proin dictum eleifend ultrices vitae maecenas nostra. nam senectus tempus pretium facilisis luctus ac nulla, mauris taciti posuere potenti turpis sit mi lectus, consectetur rutrum non praesent lacinia eget. rhoncus curae vel fusce nulla enim augue nec dapibus, pulvinar potenti scelerisque gravida arcu augue imperdiet elit inceptos, dictum accumsan rutrum mauris consectetur lobortis nam. aenean torquent ligula convallis molestie ultricies ligula curae arcu, risus neque etiam fermentum sed velit donec sagittis, non libero porta amet habitant diam sociosqu.' },
      { text: 'Ut sem orci habitasse donec luctus libero nulla sodales laoreet eros lacus proin tellus justo convallis accumsan class, elit sit lacus egestas eros elit tristique pulvinar molestie vestibulum odio velit venenatis. lectus vivamus pulvinar eget auctor ipsum ornare sodales tempus augue, elementum ut sodales posuere nostra interdum taciti lorem neque, morbi etiam nullam urna pulvinar nullam lacinia donec. elit egestas ut augue nec purus cubilia bibendum amet hendrerit, enim convallis ad mattis litora cras vivamus bibendum nisi, felis quis fames sapien torquent libero commodo leo. dolor viverra morbi blandit nostra vel habitant porta netus dictumst, pretium varius gravida vulputate faucibus adipiscing per.' },
    ],
    sideBar: [
      { bar: 'Section 1', link: '/#section-1' },
      { bar: 'Section 2', link: '/#section-2' },
      { bar: 'Section 3', link: '/#section-3' },
      { bar: 'Section 4', link: '/#section-4' },
      { bar: 'Section 5', link: '/#section-5' },
      { bar: 'Section 6', link: '/#section-6' },
      { bar: 'Section 7', link: '/#section-7' },
      { bar: 'Section 8', link: '/#section-8' },
      { bar: 'Section 9', link: '/#section-9' },
      { bar: 'Section 10', link: '/#section-10' },
      { bar: 'Section 11', link: '/#section-11' },
      { bar: 'Section 12', link: '/#section-12' },
      { bar: 'Section 13', link: '/#section-13' },
      { bar: 'Section 14', link: '/#section-14' },
      { bar: 'Section 15', link: '/#section-15' },
    ],

  }


  render() {
    return (
      <>
        <header className="main-header">
          <div className="main-logo">
            <h1>LOGO</h1>
          </div>

          <div className="header-info">
            <MainMenu />
            <SearchBar />
          </div>
        </header>

        <NavMenu items={this.state.menuItems} />

        <body>
          <div className="main-body">
            <MainImg items={this.state.mainImg} />
            <MainText items={this.state.mainText} />
            <SideBar items={this.state.sideBar} />
          </div>
        </body>


      </>
    );
  }
}
