

const Aula = ({nome, idade, profissao}) => {
  return (
    <div>
      <h3>Entendedo sobre props</h3>
          <ul>
            <li>
              Name:{ nome }
            </li>
            <li>
              Age:{ idade }
            </li>
            <li>
              Profession:{ profissao }
            </li>
          </ul>
    
    </div>
  )
}

export default Aula