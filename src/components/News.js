import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  articles = [
    {
      source: {
        id: "four-four-two",
        name: "FourFourTwo",
      },
      author: "Matthew Holt",
      title: "Italian legend eyes shock return to Serie A football aged 48",
      description:
        "News has emerged that an Italian icon could make his dramatic return to professional football",
      url: "https://www.fourfourtwo.com/news/italian-legend-eyes-shock-return-to-serie-a-football-aged-48",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/DeoWMkz8STwDHWRjEEBwnP-1200-80.jpg",
      publishedAt: "2024-10-22T13:00:00Z",
      content:
        "Serie A football could be preparing for the return of one of its prodigal sons.\r\nGianluigi Buffon, Alessandro del Piero, Daniele De Rossi, are all names that hold weight within the Italian top-flight… [+2114 chars]",
    },
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title:
        "Football latest: Forest beat struggling Palace plus Champions League build-up",
      description:
        "All the latest football news and Premier League reaction as Nottingham Forest beat Crystal Palace and build-up to the Champions League.",
      url: "http://www.bbc.co.uk/sport/football/live/cp8l81zq190t",
      urlToImage:
        "https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png",
      publishedAt: "2024-10-22T06:37:16.6839182Z",
      content:
        "Nottm Forest 1-0 Crystal Palace\r\nMedia caption, Crystal Palace's Oliver Glasner - Loss is frustrating and disappointing\r\nAll eyes turned to Crystal Palace manager Oliver Glasner at the final whistle.… [+760 chars]",
    },
    {
      source: {
        id: "fox-sports",
        name: "Fox Sports",
      },
      author: null,
      title:
        "2024 College Football Playoff odds: Oregon favored; Texas, Georgia tied",
      description:
        "Oregon is the squad with the shortest odds to earn a spot in the 12-team College Football Playoff. Check out the latest movement, including where Texas and Georgia sit after facing off in Week 8.",
      url: "https://www.foxsports.com/stories/college-football/2024-25-college-football-playoff-odds",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/09/1408/814/gabriel-926.png?ve=1&tl=1",
      publishedAt: "2024-10-22T06:24:40Z",
      content:
        "Oregon now has the shortest odds to make the 12-team Playoff after eight weeks of college football.\r\nThe Ducks defeated Purdue 35-0, and their odds to secure a spot in the postseason shortened from -… [+2108 chars]",
    },
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title: "Girona FC: what is the future for last season's fairytale club?",
      description:
        "Spanish minnows Girona made it into the Champions League for the first time last season. What does the future hold for the club, who were bought by City Football Group in 2017?",
      url: "http://www.bbc.co.uk/sport/football/articles/ckgnp0j4rzyo",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_sport/2fa3/live/96694f10-87e1-11ef-81f8-1f28bcc5be15.jpg",
      publishedAt: "2024-10-22T05:37:17.215796Z",
      content:
        "After last season's fairytale campaign, Spanish minnows Girona are having to adapt to life in the Champions League.\r\nAscending to football's loftiest heights challenges the senses, and Girona's suref… [+2164 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Jenna Laine",
      title:
        "Mike Evans, Chris Godwin injured in Buccaneers' loss to Ravens - ESPN",
      description:
        'The Buccaneers lost both star receivers -- Chris Godwin and Mike Evans -- in a 41-31 loss to the Ravens on "Monday Night Football," with Godwin suffering what coach Todd Bowles said was a dislocated left ankle and Evans suffering a right hamstring injury.',
      url: "https://www.espn.com/nfl/story/_/id/41932982/tampa-bay-buccaneers-mike-evans-exits-hamstring-injury",
      urlToImage:
        "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1022%2Fr1404001_1296x729_16%2D9.jpg",
      publishedAt: "2024-10-22T01:33:00Z",
      content:
        'TAMPA, Fla. -- The Tampa Bay Buccaneers lost both star wide receivers -- Mike Evans and Chris Godwin -- in a 41-31 loss to the Baltimore Ravens on "Monday Night Football," with Godwin suffering what … [+5226 chars]',
    },
    {
      source: {
        id: "talksport",
        name: "TalkSport",
      },
      author: "Liam Hoofe",
      title:
        "Best betting sites UK | Top betting site offers for October 2024...",
      description:
        "Sports bettors in the UK are spoiled for choice among the best betting sites: If you want in-depth football betting markets, there is a bookmaker for you; if you want to bet on esports or TV events…",
      url: "https://talksport.com/betting/1760032/best-betting-sites-uk/",
      urlToImage:
        "https://talksport.com/wp-content/uploads/sites/5/2024/08/talksport-best-betting-sites-uk-op.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
      publishedAt: "2024-10-04T08:45:00Z",
      content:
        "Sports bettors in the UK are spoiled for choice among the best betting sites: If you want in-depth football betting markets, there is a bookmaker for you; if you want to bet on esports or TV events, … [+17381 chars]",
    },
    {
      source: {
        id: "bleacher-report",
        name: "Bleacher Report",
      },
      author: "David Kenyon",
      title: "Unique Stats from the 2023 College Football Regular Season",
      description:
        "Numbers are an integral part of college football. Whether you're previewing games, ranking teams or picking an award winner, statistics help shape the story.…",
      url: "https://bleacherreport.com/articles/10100739-unique-stats-from-the-2023-college-football-regular-season",
      urlToImage:
        "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1702319871/sdx1wjlqkcqz3anqfabp.jpg",
      publishedAt: "2023-12-12T12:00:00Z",
      content:
        "Zach Bolinger/Icon Sportswire via Getty Images\r\nSpeaking of Iowa...\r\nWhat makes the Hawkeyes' stellar defensive season even more impressive is how much the team desperately needed it.\r\nAmong the many… [+711 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
      description:
        "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
      urlToImage:
        "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
      publishedAt: "2020-04-27T07:20:43Z",
      content:
        "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]",
    },
  ];
  static defaultProps = {
    category: "general",
  };

  static propTypes = {
    category: PropTypes.string,
  };

  capitalizeFirst = (String) => {
    return String.charAt(0).toUpperCase() + String.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      page: 1,
      loading: true,
      totalResults: 0,
    };
    document.title = `News- ${this.capitalizeFirst(this.props.category)}`;
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=12`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  async paginationUpdate(pageNumber) {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=${this.props.apiKey}&page=${pageNumber}&pageSize=12`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: pageNumber,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    this.paginationUpdate(this.state.page - 1);
  };

  handleNextClick = async () => {
    this.paginationUpdate(this.state.page + 1);
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=12`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      page: this.state.page,
    });
  };
  render() {
    return (
      <>
        <h1 className="text-center">
          Top headlines- <span>{this.props.category}</span>
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div
                    className="col md-4"
                    key={`${element.url}-${Math.random()
                      .toString(36)
                      .substr(2, 9)}`}
                  >
                    <NewsItem
                      title={element.title ? element.title.slice(0, 50) : ""}
                      discription={
                        element.description
                          ? element.description.slice(0, 80)
                          : ""
                      }
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>  
          <button disabled={this.state.page>=Math.ceil(this.state.totalResults/12)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </>
    );
  }
}

export default News;
