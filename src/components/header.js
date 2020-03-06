import React from 'react';
export function Header(props)
{
    return (
        <div className="header">
            <div className="container flex">
                <div className="flex">
                    <a className="logo">
                        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20" fill="#DA552F"></path><path d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14" fill="#FFF"></path></g></svg>
                    </a>
                    <input className="input-search flex-item-center" placeholder="Discover your next favorite thing..." />
                    <ul className="flex flex-item-center">
                        <li>Deals</li>
                        <li>Jobs</li>
                        <li>Makers</li>
                        <li>Radio</li>
                        <li>Ship</li>
                        <li>...</li>
                    </ul>

                </div>
                <div className="flex-item-center">
                    <button className="btn btn-white">LOG IN</button>
                    <button className="btn btn-red">SIGN UP</button>
                </div>

            </div>

        </div>
    );
}