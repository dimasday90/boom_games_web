import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default class Joke extends React.Component {
    render () {
        if (this.props.show) {
            if (this.props.type === 'twopart') {
                return (
                    <div
                        id="joke-list"
                    >
                        <header>
                            <h3>{this.props.type} type of {this.props.category} joke(s)</h3>
                        </header>
                        {this.props.jokes.map(joke => (
                            <Card className="joke-card" variant="outlined">
                                <Typography
                                    variant="body2"
                                    component="p"
                                >
                                    joke category: {joke.data.category}
                                </Typography>
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        component="h2"
                                    >
                                        {joke.data.setup}
                                    </Typography>
                                    <Typography
                                        variant="body"
                                        component="p"
                                    >
                                        {joke.data.delivery}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )
            } else {
                return (
                    <div
                        id="joke-list"
                    >
                        <header>
                            <h3>{this.props.type} type of {this.props.category} joke(s)</h3>
                        </header>
                        {this.props.jokes.map(joke => (
                            <Card className="joke-card" variant="outlined">
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        component="h2"
                                    >
                                        {joke.data.joke}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )
            }
        } else {
            return (
                <>
                </>
            )
        }
    }
}