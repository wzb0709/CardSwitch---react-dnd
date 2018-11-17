import React, { Component } from 'react';
import CardItem from './CardItem'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import './App.css';

const CardList = [{ //定义卡片内容
    title:"first Card",
    id:1,
    content:"this is first Card"
},{
    title:"second Card",
    id:2,
    content:"this is second Card"
},{
    title:"Third Card",
    id:3,
    content:"this is Third Card"
}
];
class App extends Component {
    state = {
      CardList
    };

    handleDND = (dragIndex,hoverIndex) => {
        let CardList = this.state.CardList;
        let tmp = CardList[dragIndex] //临时储存文件
        CardList.splice(dragIndex,1) //移除拖拽项
        CardList.splice(hoverIndex,0,tmp) //插入放置项
        this.setState({
            CardList
        })
    };
    render() {
        return (
            <div className='card'>
                {this.state.CardList.map((item,index) => {
                    return(
                        <CardItem //向次级界面传递参数
                            key={item.id}
                            title={item.title}
                            content={item.content}
                            index={index}
                            onDND={this.handleDND}
                        />
                    )
                })}
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(App);
