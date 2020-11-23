import React from 'react'

class Movie extends React.Component {

    state = {
        movieDetails: {},
        loading: true,
    }

    componentDidMount = async () => {
        console.log('Movie has finished mounting')
        // this.props.movieTitle is the movie upon loading
        try {
            let response = await fetch("http://www.omdbapi.com/?apikey=24ad60e9&s=" + this.props.movieTitle)
            if (response.ok) {
                let results = await response.json()
                // console.log(results)
                setTimeout(() => {
                    this.setState({ movieDetails: results.Search[0], loading: false })
                }, 1000)
            } else {
                console.log('an error happened!')
                this.setState({ loading: false })
            }
        } catch (e) {
            console.log(e)
            this.setState({ loading: false })
        }

    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.loading ? 'Loading...' : this.state.movieDetails.Title}
                </h1>
                {!this.state.loading &&
                    <img src={this.state.movieDetails.Poster} alt="movie poster" style={{ width: '200px' }} />
                }
            </div>
        )
    }
}

export default Movie