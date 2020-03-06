import React from 'react';
function UserInfo(props)
{
    return (
        <div >
            <img className="maker" src={props.imgsrc}></img>
        </div>
    )
}

export function Asidecard(props)
{
    return (
        <div>

            <div className="aside-card-cointainer">
                <div>
                    <h1 className="title">{props.title}</h1>
                    <div className="aside-card">
                        <div className="flex flex-wrap">
                            {props.profileSrc.map(imgsrc => <UserInfo {...imgsrc} />)}
                        </div>
                        <div className="line"></div>
                        <div className="maker-card-btn">
                            <a>START WORKING NOW</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="aside-card-cointainer">
                <div>
                    <h1 className="title">Product Hunt Radio</h1>
                    <a target="_blank" href="https://www.producthunt.com/radio?play=1&utm_source=Product+Hunt&utm_campaign=homepage">

                        <div className="media-card">
                            <p className="media-card-title">How to grow and monetize communities with Jill Salzman</p>

                        </div>
                    </a>
                </div>
            </div>
            <div className="aside-card-cointainer">
                <div>
                    <h1 className="title">Newsletter</h1>
                    <div className="newsletter">
                        <img className="newsletter-img" src="https://ph-files.imgix.net/742f9303-ea31-4ab8-89fa-664e6be69029?auto=format&auto=compress&codec=mozjpeg&cs=strip" />
                        <h1>Remote teams, this is for you</h1>
                        <div className="line">

                        </div>
                        <h2>Get the best new products in your inbox, every day</h2>
                        <div>
                            <input className="input-search" placeholder="Your email" />
                        </div>
                        <button className="btn btn-red btn-full">SUBSCRIBE</button>
                    </div>

                </div>
            </div>
        </div>


    );
}