import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

export default class ListaItens extends Component {
   
  constructor (props) {
    super(props);
    this.state = { listaItens: [] };
  }
  
  componentWillMount() {
    //resquisão HTTP
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => { this.setState({ listaItens: response.data }); })
      .catch(() => { console.log('Erro na recuperação de dados'); });
  }

  render() {
    return (
      <View>
        {this.state.listaItens.map( item => ( <Text key={item.titulo}>{item.titulo}</Text> ))}
      </View>
    );
  }
}

// import React, { Component } from 'react';
// import {
//   View,
//   Text
// } from 'react-native';
// import axios from 'axios';


// export default class ListaItens extends Component {

//   constructor(props) {
//     super(props);

//     this.state = { listaItens: [] };
//   }

//   componentWillMount() {
//     //requisção HTTP
//     axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
//       .then(response => { this.setState({ listaItens: response.data }); })
//       .catch(() => { console.log('Erro ao recuperar os dados'); });
//   }

//   render() {
//     return (
//       <View>
//         {this.state.listaItens.map(item => (<Text key={item.titulo}>{item.titulo}</Text>))}
//       </View>
//     );
//   }
// }

