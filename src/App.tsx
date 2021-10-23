import { Route, BrowserRouter, Switch } from "react-router-dom"
import { Home } from "./pages/Home"
import { HeavyTable } from "./pages/HeavyTable"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/heavy-table">
          <HeavyTable />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
