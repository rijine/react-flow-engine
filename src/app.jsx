import React, { Component } from 'react';
import RulesData from './data/rules.json';
import ObjectData from './data/data.json';

import RulesList from "./components/rules-list";

export default class App extends Component {
  constructor() {
    super();
    this.executedRules = [];
    this.state = {
      rules: [],
      data: {},
      isInitial: true,
      rulesResults: []
    };
  }

  runRules(rule) {
    this.executedRules = [];
    this.validateRule(this.state.rules[0]);
    this.setState({
      rulesResults: this.executedRules,
      isInitial: false
    });
  }

  reset(){
    this.setState({
      rulesResults: [],
      isInitial: true
    });
  }

  /* Recursive funtion to validate rules */
  validateRule(rule) {
    if (rule.id === 'null' || rule.id === null) {
      return;
    }
    if (this.executedRules.find(rl => rl.id == rule.id)) {
      return;
    }

    const body = rule.body;
    let ruleFunc = eval(`(${body})`);

    if (!ruleFunc || typeof ruleFunc !== 'function') {
      return;
    }

    const isSuccess = ruleFunc(this.state.data);
    let nextRule;
    if (isSuccess) {
      nextRule = this.state.rules.find(rl => rl.id == rule.true_id);
    } else {
      nextRule = this.state.rules.find(rl => rl.id == rule.false_id)
    }

    //let copyRule = Object.assign({}, rule);
    let copyRule = {...rule, isFailed: !isSuccess};
    //copyRule.isFailed = !isSuccess;
    this.executedRules.push(copyRule);

    if(!nextRule || nextRule.id === rule.id ){
        return;
    }
    this.validateRule(nextRule);

  }



  /*initial rule parsing */
  parseRules() {
    // let rules = RulesData.map(rule => {
    //   return rule;
    // });
    // let rules = RulesData.reduce( (obj,item) => {
    //   obj[item.id] = item; 
    //   return obj;
    // }, {});
    this.setState({
      rules: RulesData
    });
  }

  parseData() {
    let data = ObjectData;
    this.setState({
      data: data
    });
  }

  componentWillMount() {
    this.parseRules();
    this.parseData();
  }

  render() {
    let initialRules = "";

    if(this.state.isInitial) {
      initialRules = <RulesList initial={this.state.isInitial} rules={this.state.rules} />
    }else{
      initialRules = <RulesList initial={this.state.isInitial} rules={this.state.rulesResults} />
    }

    return (
      <div className="container">
        <div className="heading">
        <b>{ this.state.isInitial ? 'Rules' : 'Rules Executed' }</b>
        </div>
        <div className="run-container">
          <button className="btn btn-run" onClick={() => this.runRules() }>Run</button>
          <button className="btn btn-reset" onClick={() => this.reset() }>Reset</button>
        </div>
        {initialRules}
      </div>
    );
  }
}