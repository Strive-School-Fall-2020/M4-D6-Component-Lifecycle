import React from 'react'

class Movie extends React.Component {

    state = {
        movieDetails: {},
        loading: true,
    }

    componentDidMount = async () => {
        console.log('Movie has finished mounting')
        // this.props.movieTitle is the movie upon loading
        this.fetchMovie()
    }

    componentWillUnmount = () => {
        console.log('Movie is about to get unmounted!')
    }

    fetchMovie = async () => {
        this.setState({ loading: true })
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

    componentDidUpdate = (previousProps) => {
        console.log('just entered componentDidUpdate')
        // gets fired every time there's a change in the props or the state of Movie.jsx
        // so every time the component is re-rendering!
        // console.log('Movie component has updated!', this.props.movieTitle)
        // console.log(previousProps)
        // let's do the fetch again here!
        console.log('PREVIOUS MOVIE', previousProps.movieTitle)
        console.log('CURRENT MOVIE', this.props.movieTitle)
        if (previousProps.movieTitle !== this.props.movieTitle) { // it means we selected a new movie in the dropdown
            // it means also there was a change in the PROPS and not in the state
            // because we gave the component new props changing the movie in the dropdown
            console.log('PREVIOUS MOVIE IS DIFFERENT FROM CURRENT MOVIE')
            console.log('PERFORMING THE FETCH!')
            this.fetchMovie()
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