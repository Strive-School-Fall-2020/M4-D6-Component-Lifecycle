import React from 'react'

class Movie extends React.Component {

    state = {
        movieDetails: {}
    }

    componentDidMount = async () => {
        console.log('Movie has finished mounting')
        // this.props.movieTitle is the movie upon loading
        try {
            let response = await fetch("http://www.omdbapi.com/?apikey=24ad60e9&s=" + this.props.movieTitle)
            if (response.ok) {
                let results = await response.json()
                console.log(results)
                this.setState({ movieDetails: results.Search[0] })
            }
        } catch (e) {
            console.log(e)
        }

    }

    render() {
        return <h1>Loading...</h1>
    }
}

export default Movie