import React from 'react'
import ClassNames from 'classnames'
import './Nav.less'

export default class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="nav" id="nav">
                <div className="avatar-name">
                    <div className="avatar">
                        <img src={require('../resource/avatar.webp')} />
                    </div>
                    <div className="name">
                        <i>
                            Jerry
                        </i>
                    </div>
                </div>
                <div className="contents" id="nav-content">
                    <ul>
                        <li>
                            <a>
                                <i className="iconfont icon-shouye1"></i>
                                <span>首页</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="iconfont icon-biaoqian1"></i>
                                <span>标签</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="iconfont icon-guidang1"></i>
                                <span>归档</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="iconfont icon-guanyu1"></i>
                                <span>关于</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}