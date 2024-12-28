
import { createTheme, MantineProvider } from '@mantine/core'
import './App.css'

import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css';
import Homepage from './assets/pages/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJobs from './assets/pages/FindJobs';
import Header from './assets/header/Header';
import Footer from './assets/footer/Footer';
import FindTalent from './assets/pages/FindTalent';
function App() {
const theme = createTheme({
  colors:{
    'brightparis':[
         '#f4f3ff',
         '#ebe9fe',
         '#dad6fe',
        '#beb4fe',
         '#9d8afb',
         '#7e5bf7',
         '#6e38ef',
         '#5f26db',
         '#4f20b7',
         '#421c96',
         '#29106b',
],
'mine-shaft': [
         '#f6f6f6',
         '#e7e7e7',
         '#d1d1d1',
         '#b0b0b0',
       '#888888',
      '#6d6d6d',
        '#5d5d5d',
      '#4f4f4f',
         '#454545',
        '#3d3d3d',
         '#2d2d2d',
]
        
},
fontFamily:"poppins, sans-serif"

});

  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/find-jobs' element={<FindJobs/>} />
  <Route path='/find-talent' element={<FindTalent/>} />
<Route path='*' element={<Homepage/>} />

</Routes>
<Footer/>
</BrowserRouter>



    </MantineProvider>
  )
}

export default App
