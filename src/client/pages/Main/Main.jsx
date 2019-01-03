import React from 'react'

import Layout from '../../container/layout/Layout'
import ArticleList from '../../components/ArticleList'

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <Layout>
                <ArticleList/>
            </Layout>
        )
    }
}