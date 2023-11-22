import  express  from "express";
import jsonServer from "json-server";
import auth from "json-server-auth";

const server = express();
server.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

const router = jsonServer.router('./data/db.json');
server.use('/api', router);
server.db = router.db

const middlewares = jsonServer.defaults()
const rules = auth.rewriter({
    ALL_Products: 444,
    TShirts:444,
    Shirts:444,
    Pants:444,
    Shorts:444,
    Shoes:444,
    Accessories:444,
    orders:660
})

server.use(rules)
server.use(auth)
server.use(middlewares)
server.use(router)

server.listen(37000)