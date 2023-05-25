import React from 'react';

import styles from '../assets/scss/components/projects-list.module.scss';

const ProjectsList = () => {
    const items = [  
        {  
            'title': 'Project 1',   
            'description': 'Voor Project 1 hebben we het ontwerp en front-end mogen ontwikkelen voor hun dienst waarbij bedrijven en gemeentes peilingen kunnen aanmaken om bepaalde voorkeuren vast te stellen.',
            'url': '',
            'imageUrl': '/images/placeholder.png'
        },  
        {  
            'title': 'Project 2',   
            'description': 'Voor Project 2 hebben we het ontwerp en front-end mogen ontwikkelen voor hun dienst waarbij bedrijven en gemeentes peilingen kunnen aanmaken om bepaalde voorkeuren vast te stellen.',
            'url': '',
            'imageUrl': '/images/placeholder.png'
        },   
        {  
            'title': 'Project 3',   
            'description': 'Voor Project 3 hebben we het ontwerp en front-end mogen ontwikkelen voor hun dienst waarbij bedrijven en gemeentes peilingen kunnen aanmaken om bepaalde voorkeuren vast te stellen.',
            'url': '',
            'imageUrl': '/images/placeholder.png'
        },  
    ];

    const amount = items.length

    return(
        <>
            {items.map((item, index) => (
                <>
                    <div key={ index } className={ styles.item + ' row' }>
                        <div className='col-md-4'>
                            <img className={ styles.image } src={ item.imageUrl } />
                        </div>
                        <div className={ styles.info + ' col-md-5' + (index%2!=0 ? ' order-first offset-md-3' : '') }>
                            <h3 className={ styles.title }>{ item.title }</h3>
                            <p className={ styles.description }>{ item.description }</p>
                            <span className={ styles.button }>Lees meer</span>
                        </div>
                    </div>

                    { amount != (index + 1) &&
                        <hr />
                    }
                </>
            ))}
        </>
    )
}
  
export default ProjectsList