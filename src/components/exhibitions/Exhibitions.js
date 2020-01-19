import React,{Component} from 'react'

class Exhibitions extends Component {

 
  state = {
    exhibitions: []
  }

  componentDidMount() {
    let URL='https://kpopapi.herokuapp.com/api/Photographer/exhibitions'
    fetch(URL,{
      method: 'GET'
    }).then( res => res.json())
      .then(  exb => {
        this.setState({exhibitions: exb})
      })
  }

  render(){
    let {exhibitions} = this.state
    return(
      <section>
        <h1>Exhibitions</h1>
        {exhibitions.map(exb => (
          <article key={exb.id}>
            <h3>{exb.name}</h3>
            <span>{exb.date}</span>
            <hr />
          </article>
        ))}

      </section>
    )
  }
}

export default Exhibitions
