import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../container/barraLateral'
import ListaDeTarefas from '../../container/ListaDeTarefa'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)
export default Home
