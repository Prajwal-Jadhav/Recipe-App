import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React from "react";
import Recipe from "./Recipe";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "", searchTerm: "chicken", recipes: [] };
    this.App_ID = "3c94d594";
    this.API_KEY = "0174192f47c4750c9fc7af4ce986f8c6";
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.setState({ searchTerm: this.state.inputValue });
  };

  onButtonClick = () => {
    this.setState({ searchTerm: this.state.inputValue });
  };

  getRecipe = async search => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${this.App_ID}&app_key=${this.API_KEY}`
    );

    const data = await response.json();

    this.setState({ recipes: data.hits });
  };

  componentDidMount() {
    this.getRecipe(this.state.searchTerm);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.getRecipe(this.state.searchTerm);
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="app__heading">Recipe App</h1>
        <p className="app__subheading">created by Prajwal Jadhav ❤</p>
        <form className="form" onSubmit={this.onFormSubmit}>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            className="input__field"
            type="text"
            value={this.state.inputValue}
            onChange={e => this.setState({ inputValue: e.target.value })}
          />
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            className="submit__button"
            type="submit"
            onClick={this.onButtonClick}
          >
            Search
          </Button>
        </form>
        <Recipe recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
