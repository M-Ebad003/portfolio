import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
    return (
        <section>
            <BentoGrid>
                {gridItems.map((item, i) => (
                    <BentoGridItem
                        id={item?.id}
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        className={item.className}
                        imgClassName={item.imgClassName}
                        img={item.img}
                        titleClassName={item.titleClassName}
                        spareImg={item.spareImg} />
                ))}
            </BentoGrid>
        </section>
    )
}

export default Grid