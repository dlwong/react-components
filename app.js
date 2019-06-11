class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
    }

    onMouseOver() {
        this.setState({
            hover: !this.state.hover
        });
    }

    render() {
        var style = {
          fontWeight: this.state.hover ? 'bold' : 'none'
        };    
        return (
          <li style={style} onMouseOver={this.onMouseOver.bind(this)}>{this.props.item}</li>
        );
    }
};


var GroceryList = (props) => (
    <ul>
        {props.items.map(item => 
            <GroceryListItem item={item} />
        )}
    </ul>
);

var App = () => (
    <div>
        <h2>My Grocery list</h2>
        <GroceryList items={['Kale','Cucumber']} />
    </div>
);


ReactDOM.render(<App />, document.getElementById('app'));