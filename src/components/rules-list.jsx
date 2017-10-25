import React, { Component } from 'react';
import Rule from "./rule";

export default class RulesList extends Component {
    renderRules() {
        if(this.props.rules.length <= 0 ){
            return;
        }
        let rules = this.props.rules.map(
            rule => {
                console.log(rule);
                return (
                    <Rule initial={this.props.initial} key={rule.id} rule={rule} />
                );
            }
        )
        return rules;
    }

    render() {
        return (
            <div>
                <ul className="rule-list">
                    {this.renderRules()}
                </ul>
            </div>
        );
    }
}