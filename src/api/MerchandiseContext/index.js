import React, { Component } from "react";
export const MerchanContext = React.createContext(); // Creation of a Context with React Context API

export default class MerchanContainer extends Component {
  constructor(props) {
    super(props);
    this.baseURL = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`
    this.state = {
      merchandise: [],
      page: 1,
      nextPage: 2, 
      total: 0,
      isLoading: true // Controls wheter or not a Component shoud render
    };
  }

  componentDidMount() {
    this.loadMerchandise(this.baseURL);
  }

  async apiGet(url) {
    return await fetch(url).then(response => response.json());
  }

  async loadMerchandise (url) {
    this.handleLoading(true); // Set loading true
    const response = await this.apiGet(url); // Await the data JSON from API
    if (this.validateApiResponse(response)) this.handleState(response); // Array !== empty, then save information in state
  }

  validateApiResponse(response) {
    return response !== null && response !== undefined;
  }

  handleState(data) {
    const newMerchanArray = [...this.state.merchandise, ...data.products]; // New data array with previous_ and_actual requests
    this.setState({
      nextPage: 'https://' + data.nextPage,
      merchandise: newMerchanArray,
      total: data.products.length,
    });

    this.handleLoading(false); // Finally set loading false to allow components to be rendered with request transformed into props
  }

  handleLoading(bool) {
    !bool ? setTimeout(() => {
      this.setState({ isLoading: bool }); // If this function is being asked to "turn loading off" it will take 2 more seconds to do it
    }, 2000)                              // but if it is the oposite, it does instantly. 
    : this.setState({ isLoading: bool }); // Just for visual purposes (loading bars)
  }

  render() {
    return (
      <MerchanContext.Provider // Provider is the one who "provides" information to rendered children
        value={{              // Here we can set whatever function or data we want to use with the component's children
          state: this.state,
          loadMerchandise: () => this.loadMerchandise(this.state.nextPage),
        }}
      >
        {this.props.children}
      </MerchanContext.Provider>
    );
  }
}