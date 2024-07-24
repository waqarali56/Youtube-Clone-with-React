import React from "react";
import "./openVideo.css";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaEllipsisVertical } from "react-icons/fa6";

export default function OpenVideo() {
  return (
    <div>
      <div id="main_container">
        <div id="watch-Video-comment-container">
          <div className="watch-video">
            
            <div className="watch-screen-divs">
              <video className="video-size" controls autoPlay>
                <source src="./video/zz.mp4" type="video/mp4" />
                <source src="./video/zz.mp4" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="watch-container">
              <p className="watch-title">
                Highlights | Pak vs Eng A beautiful match played between
                pakistan and England
              </p>
              <div className="watch-option">
                <div className="left-div-w">
                  <img className="channel-logo" src="./images/ali.jpg" />
                  <div className="channel">
                    <p className="channel-title">Gate Smasher</p>
                    <p className="channel-sub">1.01M subcribers</p>
                  </div>
                  <button className="sub-button">Subscribe</button>
                </div>
                <div className="right-div-w">
                  <div className="like-video">
                    <button className="like-button">
                      <BiLike className="icon-size" />
                    </button>
                    <button className="dislike-button">
                      <BiDislike className="icon-size" />
                    </button>
                  </div>
                  <button className="share-video-button ">Share</button>
                  <button className="download-button">Download</button>
                  <button className="more-option-button">
                    <FaEllipsisVertical />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="discriptipn">
            <p>556,367 views Jul 27, 2021</p>
            <pre>
              Learn How To Make A Website Like YouTube Using HTML, CSS And
              JavaScript | YouTube Clone Website
            </pre>
            <p>Design Step By Step tutorial</p>
            <p> ❤️ Source Code: https://www.buymeacoffee.com/easytuto...</p>
          </div>

          <div className="comment-section">
            <h3>208 Comments</h3>
            <div className="Write-comment-box">
              <img className="user_pofile" src="./images/new_pic.jpeg" />
              <div className="input-submit-box">
                <input
                  className="take-input-box"
                  type="text"
                  placeholder="add a comment"
                />
                <div className="submitted-box">
                  <i className="fa-regular fa-face-smile" />
                  <div>
                    <button className="cancel-button">Cancel</button>
                    <button className="comment-button">comment</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="comment-container">
              <div className="com-list">
                <img className="user_pofile" src="./images/b.jpeg" />
                <div className="middle-box">
                  <div className="user-name">
                    <h3>@waqarali56</h3>
                    <p style={{ color: "rgb(135, 135, 135)", marginLeft: 20 }}>
                      5 min ago
                    </p>
                  </div>
                  <p className="comment-v">
                    Thank you for this video. I followed all the steps, now I
                    have a video player like YouTube in my website. I modify the
                    code, now I have a Responsive navig ation bar in smartphone,
                    a little code for backend , a simple dynamic video player
                    will born.
                  </p>
                  <div className="com-react-box">
                    <BiLike className=" com-reaction" />
                    <p>101</p>
                    <BiDislike className=" com-reaction" />

                    <button className="com-replay">Replay</button>
                  </div>
                </div>
              </div>
              <div className="com-list">
                <img className="user_pofile" src="./images/c.jpeg" />
                <div className="middle-box">
                  <div className="user-name">
                    <h3>Rohan Ahmad</h3>
                    <p style={{ color: "rgb(135, 135, 135)", marginLeft: 20 }}>
                      2 months ago
                    </p>
                  </div>
                  <p className="comment-v">
                    This is the content we stay subscribed for! Thank you
                    avinash, you're single handedly teaching millions of us how
                    to do front end
                  </p>
                  <div className="com-react-box">
                    <BiLike className=" com-reaction" />
                    <p>101</p>
                    <BiDislike className=" com-reaction" />

                    <button className="com-replay">Replay</button>
                  </div>
                </div>
              </div>
              <div className="com-list">
                <img className="user_pofile" src="./images/ali.jpg" />
                <div className="middle-box">
                  <div className="user-name">
                    <h3>Hashir Imtiaz</h3>
                    <p style={{ color: "rgb(135, 135, 135)", marginLeft: 20 }}>
                      1 year ago
                    </p>
                  </div>
                  <p className="comment-v">
                    I have learned a lot from this video now time to make own
                    website. #coding #animeforever
                  </p>
                  <div className="com-react-box">
                    <BiLike className=" com-reaction" />
                    <p>101</p>
                    <BiDislike className=" com-reaction" />

                    <button className="com-replay">Replay</button>
                  </div>
                </div>
              </div>
              <div className="com-list">
                <img className="user_pofile" src="./images/d.jpeg" />
                <div className="middle-box">
                  <div className="user-name">
                    <h3>Usman</h3>
                    <p style={{ color: "rgb(135, 135, 135)", marginLeft: 20 }}>
                      1 min ago
                    </p>
                  </div>
                  <p className="comment-v">
                    I can't find words to describe how grateful I am for this
                    man. Putting in time and efforts to create such videos like
                    that just for free so that our skills be improved. Thank
                    Thank you! May God bless you.
                  </p>
                  <div className="com-react-box">
                    <BiLike className=" com-reaction" />
                    <p>101</p>
                    <BiDislike className=" com-reaction" />

                    <button className="com-replay">Replay</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="other-video-container">
          <div id="video-container-OpenVideo">
            <div className="vid_list">
              <a href="#ppp">
                <img className="vid_pic" src="./images/a.jpeg" />
              </a>
              <div className="video_info">
                <a href="#aaa">
                  Highlights | Pak vs Eng A beautiful match played between
                  pakistan and England
                </a>
                <div className="video_detail">
                  <p>Ptv Sports</p>
                  <p>17K views • 11 days ago</p>
                </div>
              </div>
              <i
                style={{ color: "white" }}
                className="fa-solid fa-ellipsis-vertical set-positon"
              />
            </div>
            <div className="vid_list">
              <a href="#ppp">
                <img className="vid_pic" src="./images/b.jpeg" />
              </a>
              <div className="video_info">
                <a href="#aaa">HTML | Learn html and css </a>
                <div className="video_detail">
                  <p>Coding</p>
                  <p>15K views • 1 month ago</p>
                </div>
              </div>
              <i
                style={{ color: "white" }}
                className="fa-solid fa-ellipsis-vertical set-positon"
              />
            </div>
            <div className="vid_list">
              <a href="#ppp">
                <img className="vid_pic" src="./images/c.jpeg" />
              </a>
              <div className="video_info">
                <a href="#aaa">Song | Beautiful song of atif Aslam</a>
                <div className="video_detail">
                  <p>Music</p>
                  <p>1K views • 1 year ago</p>
                </div>
              </div>
              <i
                style={{ color: "white" }}
                className="fa-solid fa-ellipsis-vertical set-positon"
              />
            </div>
            <div className="vid_list">
              <a href="#ppp">
                <img className="vid_pic" src="./images/d.jpeg" />
              </a>
              <div className="video_info">
                <a href="#aaa">Series | Game of Throne</a>
                <div className="video_detail">
                  <p>Movies</p>
                  <p>1M views • 12 days ago</p>
                </div>
              </div>
              <i
                style={{ color: "white" }}
                className="fa-solid fa-ellipsis-vertical set-positon"
              />
            </div>
            <div className="vid_list">
              <a href="#ppp">
                <img className="vid_pic" src="./images/new_pic.jpeg" />
              </a>
              <div className="video_info">
                <a href="#aaa">
                  Kaplil Sharma Show | Wasim Akram and Harbanjan Singh
                </a>
                <div className="video_detail">
                  <p>Movies</p>
                  <p>1M views • 2 years ago</p>
                </div>
              </div>
              <i
                style={{ color: "white" }}
                className="fa-solid fa-ellipsis-vertical set-positon"
              />
            </div>
            <div className="vid_list">
              <a href="#ppp">
                <img className="vid_pic" src="./images/a.jpeg" />
              </a>
              <div className="video_info">
                <a href="#aaa">
                  Highlights | Pak vs Eng A beautiful match played between
                  pakistan and England
                </a>
                <div className="video_detail">
                  <p>Ptv Sports</p>
                  <p>17K views • 11 days ago</p>
                </div>
              </div>
              <i
                style={{ color: "white" }}
                className="fa-solid fa-ellipsis-vertical set-positon"
              />
            </div>
            <div className="vid_list">
              <a href="#ppp">
                <img className="vid_pic" src="./images/b.jpeg" />
              </a>
              <div className="video_info">
                <a href="#aaa">HTML | Learn html and css </a>
                <div className="video_detail">
                  <p>Coding</p>
                  <p>15K views • 1 month ago</p>
                </div>
              </div>
              <i
                style={{ color: "white" }}
                className="fa-solid fa-ellipsis-vertical set-positon"
              />
            </div>
            <div className="vid_list">
              <a href="#ppp">
                <img className="vid_pic" src="./images/c.jpeg" />
              </a>
              <div className="video_info">
                <a href="#aaa">Song | Beautiful song of atif Aslam</a>
                <div className="video_detail">
                  <p>Music</p>
                  <p>1K views • 1 year ago</p>
                </div>
              </div>
              <i
                style={{ color: "white" }}
                className="fa-solid fa-ellipsis-vertical set-positon"
              />
            </div>
            <div className="vid_list">
              <a href="#ppp">
                <img className="vid_pic" src="./images/d.jpeg" />
              </a>
              <div className="video_info">
                <a href="#aaa">Series | Game of Throne</a>
                <div className="video_detail">
                  <p>Movies</p>
                  <p>1M views • 12 days ago</p>
                </div>
              </div>
              <i
                style={{ color: "white" }}
                className="fa-solid fa-ellipsis-vertical set-positon"
              />
            </div>
            <div className="vid_list">
              <a href="#ppp">
                <img className="vid_pic" src="./images/new_pic.jpeg" />
              </a>
              <div className="video_info">
                <a href="#aaa">
                  Kaplil Sharma Show | Wasim Akram and Harbanjan Singh
                </a>
                <div className="video_detail">
                  <p>Movies</p>
                  <p>1M views • 2 years ago</p>
                </div>
              </div>
              <i
                style={{ color: "white" }}
                className="fa-solid fa-ellipsis-vertical set-positon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
