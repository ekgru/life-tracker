import React from "react";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      catOfTheDay: ""
    };
  }
  componentDidMount() {
    fetch("https://www.reddit.com/r/Cats.json")
      .then(response => response.json())
      .then(res => {
        let imgArr = [];
        let dataArr = res.data.children;
        dataArr.forEach(item => {
          if (item.data.domain === "i.redd.it") {
            imgArr.push(item.data.url);
          }
        });
        console.log(imgArr);

        return imgArr[this.randomInteger(0, imgArr.length)];
      })
      .then(img => {
        this.setState(() => {
          return { catOfTheDay: img };
        });
      });

    // let some = randomInteger(0, imgArr.length);
    // this.setState(() => {
    //   return {
    //     catOfTheDay: imgArr[1]
    //   };
    // });

    this.timerID = setInterval(() => this.tick(), 60000);
    console.log(this.state);
  }
  randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
      hour: "numeric",
      minute: "numeric"
    };

    return (
      <div className="main-page-container">
        <h1>Сегодня {this.state.date.toLocaleTimeString("ru", options)}</h1>
        <h2>
          Отличный день, чтобы сделать все свои дела и завести полезные
          привычки!
        </h2>
        <div><h3> Котик для твоего хорошего настроения!</h3>
        <div className='img-container'><img src={this.state.catOfTheDay} alt="здесь должен был быть котик" /></div>
        </div></div>
    );
  }
}
