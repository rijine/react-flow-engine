import React, { Component } from 'react';

export default class Rule extends Component {
    constructor(){
        super();
        this.state = {
            isShowBody: false
        };
    }

    showBody() {
        const isShow = !this.state.isShowBody;
        this.setState({
            isShowBody: isShow
        })
    }

    headerContent(){
        let headerId = <div className="rule-id"> {this.props.rule.id} </div>;
        let headerTitle = <div className="rule-title"> {this.props.rule.title} </div>;
        let headerBlock = "";

        if(this.props.initial){
            console.log(this.props.initial);
            headerBlock = <div className="rule-header" onClick={() => this.showBody() }><b>{headerId}{headerTitle}</b></div>
        }else{
            if(this.props.rule.isFailed) {
                headerBlock =  <div className="rule-header failed" onClick={() => this.showBody() }>
                    <b>{headerId}{headerTitle}</b>
                    </div>
            }else{
                headerBlock =  <div className="rule-header success" onClick={() => this.showBody() }>
                    <b>{headerId}{headerTitle}</b>
                </div>
            }
        }

        return headerBlock;
    }

    renderRule() {
        let body = "";
        if(this.state.isShowBody) {
            body = <div className="rule-body">
                <div className="rule-body-title"><b> Rule Body</b> </div>
                <div className="rule-body-text"> {this.props.rule.body} </div>
                <div className="rule-next-state">
                    <div className="rule-next rule-true">
                        <div> <b>Next rule-id if passed </b></div>
                        <div>{this.props.rule.true_id} </div>
                    </div>
                    <div className="rule-next">
                        <div> <b>Next rule-id if failed</b> </div>
                        <div> {this.props.rule.false_id} </div>
                    </div>
                </div>
            </div>
        }

        return (
            <li className="rule-item" >
                <div>
                    {this.headerContent()}
                    {body}
                </div>
            </li>
        )
    }

    render() {
        return (
            this.renderRule()
        );
    }
}