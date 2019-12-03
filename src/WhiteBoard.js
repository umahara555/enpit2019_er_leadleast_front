import React, { Component } from 'react';
import Icon from "./images/icon.png";
import "./WhiteBoard.css";

class WhiteBoardCard extends Component {
  render() {
    return(
      <div className="wh-card" id={this.props.id} draggable="true" onDragStart={this.props.onDragStart}>
        <textarea value={this.props.text} placeholder="ここにアイディア" />
      </div>
    );
  }
}

export class WhiteBoard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      board_cards: {
        problem: {
          cards: [
            { text: "" },
          ],
        },
        alternatives: {
          cards: [
            { text: "" },
          ],
        },
        solution: {
          cards: [
            { text: "" },
          ],
        },
        metrics: {
          cards: [
            { text: "" },
          ],
        },
        proposition: {
          cards: [
            { text: "" },
          ],
        },
        concept: {
          cards: [
            { text: "" },
          ],
        },
        advantage: {
          cards: [
            { text: "" },
          ],
        },
        channel: {
          cards: [
            { text: "" },
          ],
        },
        customer: {
          cards: [
            { text: "" },
          ],
        },
        adopter: {
          cards: [
            { text: "" },
          ],
        },
        cost: {
          cards: [
            { text: "" },
          ],
        },
        revenue: {
          cards: [
            { text: "" },
          ],
        },
      },
      hand_cards: {
        cards: [
          { text: "" },
        ],
      },
      drag_item: {
        id: null,
        list_name: null
      }
    }
  }

  onDragStart(e, list_name) {
    console.log("what a drag!", e.currentTarget.id);
    this.setState({drag_item: {id: e.currentTarget.id, list_name: list_name}});
  }

  onDragOver(e) {
    e.preventDefault();
  }

  onDrop(e, list_name) {
    console.log("drop", list_name, this.state.drag_item.list_name);
    const drag_item = this.state.drag_item;

    if (list_name === "hand_cards") {
      const board_cards = this.state.board_cards;
      board_cards[drag_item.list_name].cards.splice(drag_item.id, 1);
      this.setState({board_cards: board_cards});

      const hand_cards = this.state.hand_cards;
      const card = hand_cards[drag_item.id];
      hand_cards.cards.push(card);
      this.setState({hand_cards: hand_cards});

    } else {
      if (drag_item.list_name === "hand_cards") {
        const hand_cards = this.state.hand_cards;
        hand_cards.cards.splice(drag_item.id, 1);
        this.setState({hand_cards: hand_cards});

        const board_cards = this.state.board_cards;
        const card = hand_cards.cards[drag_item.id];
        board_cards[list_name].cards.push(card);
        this.setState({board_cards: board_cards});
      } else {
        const board_cards = this.state.board_cards;
        const card = board_cards[drag_item.list_name].cards[drag_item.id];
        board_cards[drag_item.list_name].cards.splice(drag_item.id, 1);
        board_cards[list_name].cards.push(card);
        this.setState({board_cards: board_cards});
      }
    }
  }

  render(){
    const problem_cards = this.state.board_cards.problem.cards.map((card, index) => {
      return (
        <WhiteBoardCard {...card} id={index} onDragStart={(e, from) => this.onDragStart(e, "problem")} />
      );
    });

    const alternatives_cards = this.state.board_cards.alternatives.cards.map((card, index) => {
      return (
        <WhiteBoardCard {...card} id={index} onDragStart={(e, from) => this.onDragStart(e, "alternatives")} />
      );
    });

    const solution_cards = this.state.board_cards.solution.cards.map((card, index) => {
      return (
        <WhiteBoardCard {...card} id={index} onDragStart={(e, from) => this.onDragStart(e, "solution")} />
      );
    });

    const metrics_cards = this.state.board_cards.metrics.cards.map((card, index) => {
      return (
        <WhiteBoardCard {...card} id={index} onDragStart={(e, from) => this.onDragStart(e, "metrics")} />
      );
    });

    const proposition_cards = this.state.board_cards.proposition.cards.map((card, index) => {
      return (
        <WhiteBoardCard {...card} id={index} onDragStart={(e, from) => this.onDragStart(e, "proposition")} />
      );
    });

    const concept_cards = this.state.board_cards.concept.cards.map((card, index) => {
      return (
        <WhiteBoardCard {...card} id={index} onDragStart={(e, from) => this.onDragStart(e, "concept")} />
      );
    });

    const advantage_cards = this.state.board_cards.advantage.cards.map((card, index) => {
      return (
        <WhiteBoardCard {...card} id={index} onDragStart={(e, from) => this.onDragStart(e, "advantage")} />
      );
    });

    const channel_cards = this.state.board_cards.channel.cards.map((card, index) => {
      return (
        <WhiteBoardCard {...card} id={index} onDragStart={(e, from) => this.onDragStart(e, "channel")} />
      );
    });

    const customer_cards = this.state.board_cards.customer.cards.map((card, index) => {
      return (
        <WhiteBoardCard {...card} id={index} onDragStart={(e, from) => this.onDragStart(e, "customer")} />
      );
    });

    const adopter_cards = this.state.board_cards.adopter.cards.map((card, index) => {
      return (
        <WhiteBoardCard {...card} id={index} onDragStart={(e, from) => this.onDragStart(e, "adopter")} />
      );
    });

    const cost_cards = this.state.board_cards.cost.cards.map((card, index) => {
      return (
        <WhiteBoardCard {...card} id={index} onDragStart={(e, from) => this.onDragStart(e, "cost")} />
      );
    });

    const revenue_cards = this.state.board_cards.revenue.cards.map((card, index) => {
      return (
        <WhiteBoardCard {...card} id={index} onDragStart={(e, from) => this.onDragStart(e, "revenue")} />
      );
    });

    const hand_cards = this.state.hand_cards.cards.map((card, index) => {
      return (
          <WhiteBoardCard {...card} id={index} onDragStart={(e, from) => this.onDragStart(e, "hand_cards")} />
      );
    });

    return(
      <div className="wh-app">
        <div className="wh-header">
          <img src={Icon} />
          <p>名称未設定プロダクト１</p>
        </div>
        <div className="wh-board-wrapper">
          <div className="wh-board wh-board-lean">
            <div className="wh-element wh-element-problem">
              <div className="wh-element-title">
                <p>課題</p>
              </div>
              <div className="wh-element-cards-wrapper">
                <div className="wh-element-cards"
                     onDragOver={(e) => this.onDragOver(e)}
                     onDrop={(e, list_name) => {this.onDrop(e, "problem")}}>
                  {problem_cards}
                </div>
              </div>
            </div>
            <div className="wh-element wh-element-alternatives">
              <div className="wh-element-title">
                <p>既存の代替品</p>
              </div>
              <div className="wh-element-cards-wrapper">
                <div className="wh-element-cards"
                     onDragOver={(e) => this.onDragOver(e)}
                     onDrop={(e, list_name) => {this.onDrop(e, "alternatives")}}>
                  {alternatives_cards}
                </div>
              </div>
            </div>
            <div className="wh-element wh-element-solution">
              <div className="wh-element-title">
                <p>ソリューション</p>
              </div>
              <div className="wh-element-cards-wrapper">
                <div className="wh-element-cards"
                     onDragOver={(e) => this.onDragOver(e)}
                     onDrop={(e, list_name) => {this.onDrop(e, "solution")}}>
                  {solution_cards}
                </div>
              </div>
            </div>
            <div className="wh-element wh-element-metrics">
              <div className="wh-element-title">
                <p>主要指標</p>
              </div>
              <div className="wh-element-cards-wrapper">
                <div className="wh-element-cards"
                     onDragOver={(e) => this.onDragOver(e)}
                     onDrop={(e, list_name) => {this.onDrop(e, "metrics")}}>
                  {metrics_cards}
                </div>
              </div>
            </div>
            <div className="wh-element wh-element-proposition">
              <div className="wh-element-title">
                <p>独自の価値提案</p>
              </div>
              <div className="wh-element-cards-wrapper">
                <div className="wh-element-cards"
                     onDragOver={(e) => this.onDragOver(e)}
                     onDrop={(e, list_name) => {this.onDrop(e, "proposition")}}>
                  {proposition_cards}
                </div>
              </div>
            </div>
            <div className="wh-element wh-element-concept">
              <div className="wh-element-title">
                <p>ハイレベルコンセプト</p>
              </div>
              <div className="wh-element-cards-wrapper">
                <div className="wh-element-cards"
                     onDragOver={(e) => this.onDragOver(e)}
                     onDrop={(e, list_name) => {this.onDrop(e, "concept")}}>
                  {concept_cards}
                </div>
              </div>
            </div>
            <div className="wh-element wh-element-advantage">
              <div className="wh-element-title">
                <p>圧倒的な優位性</p>
              </div>
              <div className="wh-element-cards-wrapper">
                <div className="wh-element-cards"
                     onDragOver={(e) => this.onDragOver(e)}
                     onDrop={(e, list_name) => {this.onDrop(e, "advantage")}}>
                  {advantage_cards}
                </div>
              </div>
            </div>
            <div className="wh-element wh-element-channel">
              <div className="wh-element-title">
                <p>チャネル</p>
              </div>
              <div className="wh-element-cards-wrapper">
                <div className="wh-element-cards"
                     onDragOver={(e) => this.onDragOver(e)}
                     onDrop={(e, list_name) => {this.onDrop(e, "channel")}}>
                  {channel_cards}
                </div>
              </div>
            </div>
            <div className="wh-element wh-element-customer">
              <div className="wh-element-title">
                <p>顧客セグメント</p>
              </div>
              <div className="wh-element-cards-wrapper">
                <div className="wh-element-cards"
                     onDragOver={(e) => this.onDragOver(e)}
                     onDrop={(e, list_name) => {this.onDrop(e, "customer")}}>
                  {customer_cards}
                </div>
              </div>
            </div>
            <div className="wh-element wh-element-">
              <div className="wh-element-title">
                <p>アーリーアダプタ</p>
              </div>
              <div className="wh-element-cards-wrapper">
                <div className="wh-element-cards"
                     onDragOver={(e) => this.onDragOver(e)}
                     onDrop={(e, list_name) => {this.onDrop(e, "adopter")}}>
                  {adopter_cards}
                </div>
              </div>
            </div>
            <div className="wh-element wh-element-cost">
              <div className="wh-element-title">
                <p>コスト構造</p>
              </div>
              <div className="wh-element-cards-wrapper">
                <div className="wh-element-cards"
                     onDragOver={(e) => this.onDragOver(e)}
                     onDrop={(e, list_name) => {this.onDrop(e, "cost")}}>
                  {cost_cards}
                </div>
              </div>
            </div>
            <div className="wh-element wh-element-">
              <div className="wh-element-title">
                <p>収益の流れ</p>
              </div>
              <div className="wh-element-cards-wrapper">
                <div className="wh-element-cards"
                     onDragOver={(e) => this.onDragOver(e)}
                     onDrop={(e, list_name) => {this.onDrop(e, "revenue")}}>
                  {revenue_cards}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wh-hand" onDragOver={(e) => this.onDragOver(e)} onDrop={(e, list_name) => {this.onDrop(e, "hand_cards")}} >
          {hand_cards}
        </div>
      </div>
    )
  }
}
