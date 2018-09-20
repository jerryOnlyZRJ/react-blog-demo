import React from 'react'
import Layout from '../../container/layout/Layout'
import FeedbackForm from '../../components/FeedbackForm'
import './Feedback.less'

export default class Article extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <Layout>
                <FeedbackForm />
            </Layout>
        )
    }
}