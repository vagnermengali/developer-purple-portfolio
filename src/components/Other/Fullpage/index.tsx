import ReactFullpage from '@fullpage/react-fullpage';

import { FullPageVerticalProps } from '@/interfaces/FullPageVerticalProps/FullPageVerticalProps';

const FullpageVertical = ({ main, work, about, contact }: FullPageVerticalProps) => {
    return (
        <ReactFullpage
            licenseKey={'W1ZLK-9XKUJ-5HJW7-90NUJ-JNMMM'}
            scrollingSpeed={1200}
            credits={{ enabled: false }}
            anchors={['main', 'work', 'about', 'contact']}
            render={() => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className='section'> {main} </div>
                        <div className='section'> {work} </div>
                        <div className='section'> {about} </div>
                        <div className='section'> {contact} </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
};

export default FullpageVertical;
