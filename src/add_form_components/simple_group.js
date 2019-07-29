import React, {Component} from 'react';


export default class SimpleGroup extends Component {

    constructor(props) {
        super(props);

        if (this.props.type === 'group') {
            this.state = {
                id: this.props.id,
                type: this.props.type,
                group_name: '',
                items: []
            };
        } else if (this.props.type === 'input') {
            this.state = {
                id: this.props.id,
                type: this.props.type,
                label: '',
                value:''
            };
        }
    }

    handle_add_component(e) {
        e.preventDefault();
        this.setState({items: [...this.state.items, {type: 'group'}]});
    }

    handle_add_component_input(e) {
        e.preventDefault();
        this.setState({items: [...this.state.items, {type: 'input'}]});
    }

    handle_on_change(e) {
        const newStateContent = this.state.items;
        newStateContent[e.id] = e;
        this.setState({
            items: newStateContent
        });
        this.props.handle_on_change(this.state)
    }

    handle_on_change_group_name(e) {
        this.setState({group_name: e.target.value});
        this.props.handle_on_change(this.state)
    }

    handle_on_change_key(e){
        this.setState({label:e.target.value});
        this.props.handle_on_change(this.state)
    }

    handle_on_change_value(e){
        this.setState({value:e.target.value});
        this.props.handle_on_change(this.state)
    }

    render() {
        if (this.props.type === 'group') {
            return (
                <div style={{margin: 10, border: '2px solid grey',padding:10,borderRadius:'1em'}}>
                    <input
                        placeholder={'Group Name'}
                        defaultValue={""}
                        onChange={(e) => this.handle_on_change_group_name(e)}
                    />
                    {this.state.items.map((object, i) => {
                        return (
                            <SimpleGroup
                                key={i}
                                id={i}
                                type={object['type']}
                                handle_on_change={(e) => this.handle_on_change(e)}
                            />
                        );
                    })}
                    <br/>
                    <br/>
                    <button onClick={(e) => this.handle_add_component(e)}>Add SubGroup</button>
                    <button onClick={(e) => this.handle_add_component_input(e)}>Add Input</button>
                </div>
            );
        } else if (this.props.type === 'input') {
            return (
                <div style={{margin: 10}}>
                    <input
                        defaultValue={""}
                        placeholder={'Label'}
                        onChange={(e)=>this.handle_on_change_key(e)}
                        id={this.props.id}
                    />
                    <input
                        defaultValue={""}
                        placeholder={'Value'}
                        onChange={(e)=>this.handle_on_change_value(e)}
                        id={this.props.id}
                    />
                </div>
            );

        }
    }
}
