import { expressive } from './deps.ts';
import { agregarProducto, obtenerProductos } from './controllers/productos.ts';

const app = new expressive.App();
app.use(expressive.bodyParser.json());

app.get('/api/productos', obtenerProductos);
app.post('/api/productos', agregarProducto);

app.listen(5000);
console.log("running");