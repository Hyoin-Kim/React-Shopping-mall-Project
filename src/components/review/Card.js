import React from 'react';

const Card = () => {
    return (
        <div id="main-content" class="file_manager">
        <div class="container">
            <div class="row clearfix">
                <div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card">
                        <div class="file">
                            <a href="javascript:void(0);">
                                <div class="hover">
                                    <button type="button" class="btn btn-icon btn-danger">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </div>
                                <div class="image">
                                    <img src="https://via.placeholder.com/280x280/87CEFA/000000" alt="img" class="img-fluid" />
                                </div>
                                <div class="file-name">
                                    <p class="m-b-5 text-muted">img21545ds.jpg</p>
                                    <small>Size: 2MB <span class="date text-muted">Dec 11, 2017</span></small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div> 
                <div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card">
                        <div class="file">
                            <a href="javascript:void(0);">
                                <div class="hover">
                                    <button type="button" class="btn btn-icon btn-danger">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </div>
                                <div class="image">
                                    <img src="https://via.placeholder.com/280x280/FF69B4/000000" alt="img" class="img-fluid" />
                                </div>
                                <div class="file-name">
                                    <p class="m-b-5 text-muted">img21545ds.jpg</p>
                                    <small>Size: 2MB <span class="date text-muted">Dec 11, 2017</span></small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Card;