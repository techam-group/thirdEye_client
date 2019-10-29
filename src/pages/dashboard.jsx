import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DashboardBase from '../components/dashboard/layout/DashboardBase'

import DashboardOverview from '../components/dashboard/DashboardOverview'
import TakeOff from '../components/dashboard/TakeOff'
import Missions from '../components/dashboard/Missions'
import Photos from '../components/dashboard/Photos'
import Videos from '../components/dashboard/Videos'
import Profile from '../components/dashboard/Profile'
import Settings from '../components/dashboard/Settings'
import Trash from '../components/dashboard/Trash'
import Support from '../components/dashboard/Support'

const DashboardRoutes = () => (
  <Switch>
    <Route exact path="/dashboard" component={DashboardOverview} />
    <Route exact path="/dashboard/take-off" component={TakeOff} />
    <Route exact path="/dashboard/missions" component={Missions} />
    <Route exact path="/dashboard/photos" component={Photos} />
    <Route exact path="/dashboard/videos" component={Videos} />
    <Route exact path="/dashboard/profile" component={Profile} />
    <Route exact path="/dashboard/settings" component={Settings} />
    <Route exact path="/dashboard/trash" component={Trash} />
    <Route exact path="/dashboard/support" component={Support} />
  </Switch>
)

const Dashboard = () => (
  <Router>
    <DashboardBase>
      <DashboardRoutes />
    </DashboardBase>
  </Router>
)

export default Dashboard