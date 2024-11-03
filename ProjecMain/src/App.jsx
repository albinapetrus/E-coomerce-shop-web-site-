import React from 'react';

function App() {
   
    render() {
        return (
            <div className="wrapper">
                  <Router>
                    <Header  />
                    <Routes>
                    <Route 
  path="/" 
  element={<Items items={this.state.items} />} 
/> 

                        <Route path="/about" element={<AboutUs />} /> {/* Сторінка "Про нас" */}
                        <Route path="/contacts" element={<Contacts />} /> {/* Сторінка "Контакти" */}
                        <Route path="/form" element={<Form />} />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;
