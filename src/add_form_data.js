import React, {Component} from 'react';
import SimpleGroup from "./add_form_components/simple_group";

export default class add_form_data extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: []
        }
    }

    handle_add_component(e) {
        e.preventDefault();
        this.setState({content: [...this.state.content, {}]});
    }

    handle_on_change(e) {
        const newStateContent = this.state.content;
        newStateContent[e.id] = e;
        this.setState({
            content: newStateContent
        });
    }

    handle_delete(e) {
        const newStateContent = this.state.content.splice([e.id],0);
        this.setState({
            content: newStateContent
        });
    }

    handle_generate_json(){
        console.log(JSON.stringify(this.state.content));
    }

    render() {
        return (
            <div>
                <div>
                {this.state.content.map((object, i) => {
                    return (
                    <SimpleGroup
                        key={i}
                        id={i}
                        type={'group'}
                        handle_on_change={(e)=>this.handle_on_change(e)}
                        handle_delete={(e)=>this.handle_delete(e)}
                    />
                    );})}
                </div>
                <button onClick={(e) => this.handle_add_component(e)}>Add Group</button>
                <button onClick={(e) => this.handle_generate_json(e)}>Generate JSON</button>
                <pre>{JSON.stringify(this.state.content, null, 2) }</pre>
            </div>
        );
    }
}