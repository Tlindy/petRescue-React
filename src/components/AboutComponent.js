import React from "react";

function About(props) {
    return (
        <div className="container">
            <div className="row mt-4 mb-5">
                <div className="col">
                    <h1 className="text-center">About Find A Fur Baby</h1>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col">
                            <h2 className="text-primary">Our Mission:</h2>
                            <p>
                                We believe that all fur babies deserve a loving
                                furever home! We have made it our mission to
                                help as many animals as possible find people who
                                will love them!
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <h2 className="text-primary">
                                Why we do what we do:
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam luctus lacus in ipsum
                                imperdiet, at cursus augue rhoncus. Praesent
                                pulvinar eros eu odio dapibus mattis. Maecenas
                                sollicitudin fermentum rhoncus. Ut non lacus
                                lacus. Cras tincidunt tincidunt posuere.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <h2 className="text-primary">
                                The history of Find A Fur Baby:
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Fusce rhoncus efficitur magna
                                non viverra. Suspendisse dapibus nibh sed ante
                                dictum porttitor. Praesent auctor metus nec
                                nulla efficitur, a porttitor leo tincidunt.
                                Phasellus et urna vitae enim lobortis tempor
                                eget ut diam. Integer laoreet libero vel ligula
                                pulvinar, vitae fringilla quam hendrerit.
                            </p>
                            <p>
                                Aliquam vitae faucibus enim. Aliquam a diam
                                sapien. Nulla molestie elit tellus, vel
                                consequat neque pellentesque et. Proin tristique
                                ipsum vel ornare iaculis. Pellentesque habitant
                                morbi tristique senectus et netus et malesuada
                                fames ac turpis egestas. Vestibulum dignissim
                                odio non commodo luctus. Pellentesque imperdiet
                                a arcu non iaculis. Nam non odio turpis.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img
                        src="/assets/images/playing.jpg"
                        alt="Two people playing with a dog"
                        className="img-fluid mb-4"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
