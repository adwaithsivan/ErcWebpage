import React from 'react'
import './linktabs.css'
import { Fragment } from "react";

export const LinkTabs = () => {
  return (
    <div>
        <div className="link-tabs">

           <a href="/acts">
            <div className="link-box">
              <div>
               Acts
              </div>
            </div>
          </a>
          <a href="/policies">
            <div className="link-box">
              <div>
               Policies
              </div>
            </div>
          </a>
          <a href="/rules">
            <div className="link-box">
              <div>
               Rules
              </div>
            </div>
          </a>
          <a href="/advice-to-gok">
            <div className="link-box">
              <div>
               Advice to GOK
              </div>
            </div>
          </a>
          <a href="/repealed-regulations">
            <div className="link-box">
              <div>
              Repealed Regulations
              </div>
            </div>
          </a>
          <a href="/other-ercs">
            <div className="link-box">
              <div>
              Other ERCs
              </div>
            </div>
          </a>
        </div>
    </div>
  )
}
