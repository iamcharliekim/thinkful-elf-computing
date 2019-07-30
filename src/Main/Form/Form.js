import React from 'react'

const form = (props) => {
	const features = Object.keys(props.stateCopy.features)
          .map(key => {
            const options = props.stateCopy.features[key].map((item, index) => {
              const selectedClass = item.name === props.stateCopy.selected[key].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              
			return <li key={index} className="feature__item">
                <div className={featureClass}
                  onClick={e => props.updateFeature(key, item)}>
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(item.cost) })
                </div>
              </li>
            });

            return <div className="feature" key={key}>
              <div className="feature__name">{key}</div>
              <ul className="feature__list">
                { options }
              </ul>
            </div>
          });   
	
	return (
		<section className="main__form">
			<h3>TECH SPECS AND CUSTOMIZATIONS</h3>
			 {features}	
		</section>
	)
}

export default form